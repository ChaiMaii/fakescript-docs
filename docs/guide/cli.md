# CLI & Commands

In keeping with FakeScript's aesthetic, every `fksc` subcommand is a plain English word with no flags or dashes required.

## Subcommands

| Command | Description |
| :--- | :--- |
| `fksc <file.fks>` | Shorthand for `fksc build <file.fks>` (v2.0 compatible) |
| `fksc build <file.fks>` | Compiles `<file.fks>` into a native executable next to the source file |
| `fksc run <file.fks>` | Compiles to a temporary directory, executes immediately, and cleans up |
| `fksc emit <file.fks>` | Prints the `gofmt`-formatted Go source code to stdout |
| `fksc check <file.fks>` | Runs the lexer, parser, and type checker without invoking `go build` |
| `fksc version` | Displays the compiler version and host `OS/ARCH` |
| `fksc help` | Prints usage information |

## Compile-Time Diagnostics

When an error occurs, `fksc` reports the file path, 1-based line number, message, and the exact offending source line:

```text
bad.fks:4: error: symbol "=" is not allowed in FakeScript — use plain English keywords only
  | let x = 5
```

```text
types.fks:3: error: cannot assign text to variable "x" of type num
  | set x to say hello end
```

## Running the Compiler Test Suite

FakeScript ships with an end-to-end Go test suite covering lexing, parsing, scoping, lists, loops, standard library modules, `ask` stdin, Go keyword escaping, and compile-time error cases:

```powershell
go test -v ./...
```
