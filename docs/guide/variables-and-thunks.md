# Variables & Lazy Thunks

## Declaring Variables (`let`)

Declare a variable with `let <name> be <expr>`. Its type is inferred automatically:

```text
let count be 0
let label be say ready end
let active be yes
```

You can also annotate the type explicitly with `as <type>`:

```text
let count as num be 0
let names as list of text be empty list of text
```

## Mutating Variables (`set`)

Update an existing variable with `set <name> to <expr>`:

```text
set count to count plus 1
set label to say done end
```

Assigning a value of a different type is caught at compile time.

## Lexical Scoping & Shadowing

FakeScript v3.0 supports true block-level lexical scoping:

- Top-level `let` statements declare global variables accessible from any function, initialized in exact top-to-bottom source order.
- `let` inside `fn`, `if`, `else`, `loop`, or `for each` declares a **local** variable scoped to that block and can safely shadow outer variables.
- Unused local variables do not cause Go compilation errors.

```text
import print

let x be 10

fn demo do
    let x be 99
    if x is 99 do
        let x be 7
        ln of print contains x
    end
    ln of print contains x
end

exec demo
ln of print contains x
```

Output:
```text
7
99
10
```

## Lazy Action Bindings (Thunks)

Assigning any **void** call (such as `ln of print contains ...` or a void function call) to a variable does **not** run it immediately. Instead, `fksc` wraps it in a lazy thunk (`func()`):

```text
import print

let announce be ln of print contains say action fired end

fn main do
    ln of print contains say before end
    announce
    announce
end

exec main
```

Output:
```text
before
action fired
action fired
```

Thunks work in both global and local scopes, and can be reassigned with `set` to another void action.
