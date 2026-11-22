# Standard Library

Import any built-in module with `import <name>` or `import <name> as <alias>`. Call methods with `<method> of <alias>` (or `<method> of <alias> contains <arg1> and <arg2>`).

::: tip Arity-Aware Nesting
Fixed-arity standard library calls stop parsing arguments once their expected count is reached, so you can nest them naturally inside variadic calls like `ln of print contains abs of math contains negative 9 and pow of math contains 2 and 8` without needing `group ... done`.
:::

## `print`

| Method | Signature | Description |
| :--- | :--- | :--- |
| `ln` | `(...any) → void` | Prints all arguments space-separated followed by a newline (`fmt.Println`) |
| `raw` | `(...any) → void` | Prints all arguments with no trailing newline (`fmt.Print`) |

```text
import print
ln of print contains say score is end and 95
raw of print contains say loading end
```

## `math`

| Method | Signature | Description |
| :--- | :--- | :--- |
| `abs` | `(num) → num` | Absolute value |
| `min` | `(num, num) → num` | Smaller of two integers |
| `max` | `(num, num) → num` | Larger of two integers |
| `pow` | `(num, num) → num` | Fast integer exponentiation (`base^exp`) |
| `sqrt` | `(num) → num` | Integer square root |
| `rand` | `(num) → num` | Random integer in `[0, max)` via `math/rand/v2` |
| `clamp` | `(num, num, num) → num` | Clamps `val` into `[lo, hi]` |

```text
import math
let p be pow of math contains 2 and 10
let c be clamp of math contains 50 and 0 and 10
```

## `text`

| Method | Signature | Description |
| :--- | :--- | :--- |
| `upper` | `(text) → text` | Converts to uppercase |
| `lower` | `(text) → text` | Converts to lowercase |
| `trim` | `(text) → text` | Strips leading and trailing whitespace |
| `join` | `(list of text, text) → text` | Joins a list of strings with a separator |
| `split` | `(text, text) → list of text` | Splits a string by a separator |
| `has` | `(text, text) → flag` | Returns `true` if string contains substring |
| `replace` | `(text, text, text) → text` | Replaces all occurrences of `old` with `new` |
| `fromnum` | `(num) → text` | Formats an integer as base-10 text |
| `tonum` | `(text) → num` | Parses base-10 text into an integer (`0` on error) |
| `length` | `(text) → num` | Byte length of string |

## `file`

| Method | Signature | Description |
| :--- | :--- | :--- |
| `read` | `(text) → text` | Reads entire file contents as text |
| `write` | `(text, text) → void` | Writes text to file (creates or overwrites) |
| `append` | `(text, text) → void` | Appends text to file (creates if missing) |
| `exists` | `(text) → flag` | Returns `true` if the path exists |

```text
import file
write of file contains path and say hello end
append of file contains path and say  world end
let content be read of file contains path
```

## `time`

| Method | Signature | Description |
| :--- | :--- | :--- |
| `now` | `() → num` | Current Unix timestamp in milliseconds |
| `sleep` | `(num) → void` | Pauses execution for `<ms>` milliseconds |

```text
import time
let start be now of time
sleep of time contains 100
let elapsed be now of time minus start
```
