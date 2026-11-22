# Examples

All examples live in the `examples/` directory and can be run directly with `fksc.exe run <path>`.

## v2.0 Reference Program (`examples/script.fks`)

Demonstrates full backwards compatibility with FakeScript v2.0 — lazy action bindings, untyped parameters, globals, and loops:

```text
note pure zero symbol fakescript program

import print as print

let printtrue be ln of print contains say true end
let i be 0

fn countup do
    loop when i is under 5 do
        ln of print contains i
        set i to i plus 1
    end
end

fn greet with user do
    raw of print contains say welcome end
    ln of print contains user
end

fn main do
    printtrue
    exec greet with say creator end
    exec countup

    if i is 5 do
        ln of print contains say all done end
    end
end

exec main
```

## v3.0 Full Showcase (`examples/showcase.fks`)

Showcases typed functions, recursion, `else if`, lists, `for each`, `loop from ... to ...`, `skip`/`stop`, `math`, `text`, `time`, variadic `print`, and a recursive `fib(32)` speed benchmark:

```text
note FakeScript v3 showcase zero symbols native speed

import print
import math
import text
import time

fn fib with num n returns num do
    if n is at most 1 do
        give back n
    end
    let a be exec fib with n minus 1
    let b be exec fib with n minus 2
    give back a plus b
end

fn classify with num score returns text do
    if score is at least 90 do
        give back say S rank end
    else if score is at least 75 do
        give back say A rank end
    else if score is at least 50 do
        give back say B rank end
    else do
        give back say try again end
    end
end

fn sumlist with list of num nums returns num do
    let total be 0
    for each n in nums do
        set total to total plus n
    end
    give back total
end

fn main do
    let banner be ln of print contains say FakeScript v3 Showcase end
    banner

    let x be negative 42
    ln of print contains say abs of end and x and say is end and abs of math contains x
    ln of print contains say 2 to the 10 is end and pow of math contains 2 and 10
    ln of print contains say grouped math end and group 2 plus 3 done times 4

    let fruits be list of say apple end and say banana end end
    append say cherry end to fruits
    set item 1 of fruits to say blueberry end
    ln of print contains say joined fruits end and join of text contains fruits and say  and  end

    let scores be list of 40 and 78 and 95 end
    ln of print contains say total score end and exec sumlist with scores
    for each s in scores do
        ln of print contains say score end and s and say is end and exec classify with s
    end

    let greeting be upper of text contains say hello fakescript end
    ln of print contains greeting and say length end and length of greeting

    let evens be empty list of num
    loop from 0 to 12 as k do
        if k mod 2 is not 0 do
            skip
        end
        if k is over 8 do
            stop
        end
        append k to evens
    end
    ln of print contains say evens count end and length of evens

    let start be now of time
    let result be exec fib with 32
    let elapsed be now of time minus start
    ln of print contains say fib 32 is end and result and say computed in end and elapsed and say ms end
end

exec main
```

## Interactive Input (`examples/interactive.fks`)

```text
note interactive standard input demo

import print
import text

fn main do
    ask say Enter your name  end into name
    ask num say Enter your birth year  end into year
    let age be 2026 minus year
    let loud be upper of text contains name
    ln of print contains say Hello end and loud and say you are about end and age and say years old end
end

exec main
```
