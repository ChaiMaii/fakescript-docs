# Lists & Standard Input

## Lists

### Creating Lists

Create a populated list with `list of ... end` (element type is inferred from the first element and checked across all elements):

```text
let fruits be list of say apple end and say banana end end
let scores be list of 40 and 78 and 95 end
```

Create an empty typed list with `empty list of <type>`:

```text
let evens be empty list of num
```

### Indexing, Mutating, Appending & Length

```text
note read element at index 0
let first be item 0 of fruits

note update element at index 1
set item 1 of fruits to say blueberry end

note append to end of list
append say cherry end to fruits

note get length (works on both lists and text)
let n be length of fruits
```

### Passing Lists to Functions

```text
fn sumlist with list of num nums returns num do
    let total be 0
    for each n in nums do
        set total to total plus n
    end
    give back total
end
```

---

## Standard Input (`ask`)

Prompt the user and read a line from standard input using `ask`:

```text
import print
import text

ask say Enter your name  end into name
ask num say Enter your birth year  end into year

let age be 2026 minus year
let loud be upper of text contains name
ln of print contains say Hello end and loud and say you are about end and age and say years old end
```

- `ask <prompt> into <var>` reads a `text` line.
- `ask num <prompt> into <var>` reads a line and parses it as a `num` (`int64`, defaulting to `0` on invalid input).
- If `<var>` does not exist yet in the current scope, `ask` declares it automatically; if it already exists, `ask` verifies the type matches and reassigns it.
