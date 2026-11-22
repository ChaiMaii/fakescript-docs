# Syntax & Types

## Lexical Rules

- **Statements** are line-oriented — one statement per line, no semicolons.
- **Comments** start with `note` at the beginning of a line:
  ```text
  note this entire line is ignored by the compiler
  ```
- **Zero Symbols**: Identifiers and keywords must consist strictly of letters and digits (`A-Z`, `a-z`, `0-9`). Any punctuation character outside `note` comments and `say ... end` string literals triggers a compile error.
- **Go Keyword Safety**: You may freely name variables or functions `type`, `range`, `len`, `string`, `main`, etc. — `fksc` automatically escapes Go reserved identifiers during code generation.

## Primitive & Composite Types

| FakeScript Type | Go Type | Literals / Examples |
| :--- | :--- | :--- |
| `num` | `int64` | `0`, `42`, `negative 7` |
| `text` | `string` | `say hello world end`, `say end` (empty string) |
| `flag` | `bool` | `true`, `false`, `yes`, `no` |
| `list of <type>` | `[]T` | `list of 1 and 2 and 3 end`, `empty list of text` |
| `action` | `func()` | `let greet be ln of print contains say hi end` |

## String Literals (`say ... end`)

Strings begin with the standalone word `say` and end at the next standalone word `end` on the same line:

```text
let greeting be say hello world end
let empty be say end
let padded be say  and  end
```

Notice that leading/trailing spaces inside `say  and  end` are preserved (one delimiter space after `say` and one before `end` are stripped), which is useful for separators like `" and "` in `join of text`.

## Imports

Import standard library modules at the top level using `import <module>` or `import <module> as <alias>`:

```text
import print
import math as m
import text as str
```
