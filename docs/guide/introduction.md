# Introduction

**FakeScript** (`.fks`) is an Ahead-of-Time (AOT) compiled programming language built around a single bold constraint: **strictly zero punctuation symbols** in source code.

## Why FakeScript?

Most programming languages rely heavily on punctuation — `=`, `{`, `}`, `(`, `)`, `;`, `,`, `.`, `"`, `+`, `-`, `*`, `/` — to delimit structure. FakeScript replaces every symbol with plain English keywords separated by whitespace:

| Traditional Code | FakeScript |
| :--- | :--- |
| `let x = 10;` | `let x be 10` |
| `x = x + 1;` | `set x to x plus 1` |
| `"hello world"` | `say hello world end` |
| `(2 + 3) * 4` | `group 2 plus 3 done times 4` |
| `fmt.Println("hi", x)` | `ln of print contains say hi end and x` |
| `if (x >= 10) { ... }` | `if x is at least 10 do ... end` |
| `func add(a, b int) int` | `fn add with num a and num b returns num do` |

## Design Principles

1. **Zero Punctuation Enforcement**: The lexer rejects punctuation symbols outside `say ... end` string literals and `note` comments, pointing directly to the offending line.
2. **Real Native Performance**: FakeScript is **not** interpreted. `fksc` lowers `.fks` to statically typed Go (`int64`, `string`, `bool`, `[]T`, `func()`) and compiles it with `go build` into a standalone native binary. Recursive `fib(32)` runs in under 10 ms.
3. **Lazy Action Bindings**: Assigning a void action (like `ln of print contains say hi end`) to a variable creates a deferred thunk (`func()`), invoked only when you reference that variable as a statement.
4. **Zero Compiler Dependencies**: `fksc.go` uses only the Go standard library, so building the compiler requires nothing beyond Go itself.
