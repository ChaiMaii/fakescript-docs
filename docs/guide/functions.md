# Functions & Recursion

## Defining Functions

Define a function with `fn <name>`, optional parameters (`with ...`), and an optional return type (`returns <type>`):

```text
fn add with num a and num b returns num do
    give back a plus b
end
```

- **Void functions** omit `returns <type>` and may use bare `give back` for an early return.
- **v2.0 Compatibility**: Untyped parameters (such as `fn greet with user do`) default to `text`.
- **Two-pass resolution**: Functions can be defined in any order and call each other mutually or themselves recursively.

## Calling Functions (`exec`)

Use `exec <name>` (with optional `with <arg1> and <arg2>`) either as a statement or inside any expression:

```text
let total be exec add with 20 and 22
ln of print contains total
```

## Recursive Example (Fibonacci)

```text
import print
import time

fn fib with num n returns num do
    if n is at most 1 do
        give back n
    end
    let a be exec fib with n minus 1
    let b be exec fib with n minus 2
    give back a plus b
end

let start be now of time
let result be exec fib with 32
let elapsed be now of time minus start
ln of print contains say fib 32 is end and result and say in end and elapsed and say ms end
```

## `fn main` Convention

Just like v2.0, `fn main` compiles to `func fks_main()` in Go and runs only when explicitly invoked via `exec main` (so top-level setup statements run in exact order first).
