# Expressions & Operators

FakeScript uses a full recursive-descent expression parser with standard mathematical operator precedence — no parentheses required unless you want to override precedence with `group ... done`.

## Precedence Table (Highest to Lowest)

| Level | Operators | Meaning | Types |
| :--- | :--- | :--- | :--- |
| 1 | `group <expr> done` | Explicit grouping | Any |
| 2 | `negative <x>`, `not <x>` | Unary minus, logical NOT | `num`, `flag` |
| 3 | `times`, `divided by` / `over`, `mod` / `remainder` | `*`, `/`, `%` | `num` |
| 4 | `plus`, `minus` | `+` (add or concat), `-` | `num` (`plus` also supports `text`) |
| 5 | `is`, `is not`, `is under`, `is over`, `is at least`, `is at most` | `==`, `!=`, `<`, `>`, `>=`, `<=` | Matching primitives → `flag` |
| 6 | `and` | Logical AND (`&&`) | `flag` → `flag` |
| 7 | `or` | Logical OR (`\|\|`) | `flag` → `flag` |

## Examples

```text
let a be 2 plus 3 times 4                  note 14
let b be group 2 plus 3 done times 4       note 20
let c be 20 divided by 4 minus 1           note 4
let d be 17 mod 5                          note 2
let e be negative 5 plus 8                 note 3
let msg be say hello  end plus say world end
```

## Disambiguating `and`

`and` serves two natural roles in English:
- In **conditions and grouped expressions** (`if`, `loop when`, `group ... done`), `and` is logical AND (`&&`).
- In **argument and list items** (`contains ...`, `with ...`, `list of ... end`), `and` separates items.

If you need logical `and` inside a function or module argument, wrap it in `group ... done`:

```text
ln of print contains group a is 14 and b is 20 done
```
