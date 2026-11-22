# Control Flow & Loops

## Conditionals (`if` / `else if` / `else`)

```text
if score is at least 90 do
    ln of print contains say S rank end
else if score is at least 75 do
    ln of print contains say A rank end
else if score is at least 50 do
    ln of print contains say B rank end
else do
    ln of print contains say try again end
end
```

Conditions must evaluate to type `flag`.

## Conditional Loop (`loop when`)

Repeats while a condition holds (equivalent to `while`):

```text
let i be 0
loop when i is under 5 do
    ln of print contains i
    set i to i plus 1
end
```

## Counted Range Loop (`loop from ... to ... as ...`)

Iterates a `num` variable from `start` (inclusive) up to `end` (exclusive):

```text
loop from 0 to 5 as i do
    ln of print contains i
end
```

This compiles directly to a zero-overhead Go `for i := int64(0); i < int64(5); i++` loop.

## For-Each Loop (`for each ... in ...`)

Iterates over every element of a `list`:

```text
let fruits be list of say apple end and say banana end end
for each fruit in fruits do
    ln of print contains fruit
end
```

## Loop Control (`stop` & `skip`)

- `stop` exits the innermost loop immediately (`break`).
- `skip` jumps to the next iteration (`continue`).

```text
loop from 0 to 12 as k do
    if k mod 2 is not 0 do
        skip
    end
    if k is over 8 do
        stop
    end
    ln of print contains k
end
```

Using `stop` or `skip` outside a loop is caught at compile time.
