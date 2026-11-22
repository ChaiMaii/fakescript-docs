# Compiler Architecture

`fksc` is implemented in a single, zero-dependency Go source file (`fksc.go`) organized into a clean four-stage compiler pipeline:

```text
.fks source ──▶ Lexer ──▶ Recursive-Descent Parser ──▶ Type Checker ──▶ Go CodeGen ──▶ go build ──▶ Native Binary
```

## 1. Lexer (`lex`)

- Scans `.fks` line by line, tracking 1-based line numbers on every token.
- Strips blank lines and `note ...` comments.
- Parses `say ... end` string literals on a single line, preserving interior spacing.
- Enforces the **strictly zero-symbol rule** on all non-string, non-comment tokens.
- Classifies digits (`TokNum`), booleans (`true`/`yes`, `false`/`no` → `TokBool`), and words (`TokWord`).

## 2. Parser (`parse`)

- Builds a typed Abstract Syntax Tree (`Program`, `FuncDecl`, `Stmt`, `Expr`).
- Uses a full recursive-descent expression parser with explicit precedence levels (`or` → `and` → comparisons → additive → multiplicative → unary → primary).
- Tracks imported module aliases so `<method> of <alias>` is cleanly distinguished from `item <idx> of <list>`, `length of <expr>`, and `append <val> to <list>`.
- Uses fixed-arity awareness on stdlib calls so nested calls inside variadic argument lists don't consume outer `and` separators.

## 3. Semantic Analyzer & Type Checker (`checkProgram`)

Runs four passes over the AST:
1. Validates all `import` statements and registers all `fn` signatures (enabling mutual and self-recursion regardless of declaration order).
2. Type-checks top-level variable declarations (`let` / `ask`) into the global scope.
3. Type-checks every function body in its own child scope, tracking return types and loop nesting depth (`stop` / `skip` / `give back`).
4. Type-checks remaining top-level statements.

Automatically wraps void expressions on the right-hand side of `let` in a `ThunkExpr` (`action` / `func()`), and tracks variable usage so unused locals emit `_ = name` without triggering Go compile errors.

## 4. Go Code Generator (`generateGo`)

- Maps FakeScript types directly to unboxed native Go types (`int64`, `string`, `bool`, `[]T`, `func()`).
- Escapes Go reserved keywords and predeclared identifiers (`main` → `fks_main`, `type` → `fks_type`, etc.) while keeping ordinary names clean.
- Tracks only the Go stdlib imports and helper functions actually referenced by the program.
- Formats the output via `go/format` before emitting or passing it to `go build`.
