---
layout: home

hero:
  name: FakeScript
  text: Zero Symbols. Native Speed.
  tagline: An Ahead-of-Time compiled programming language written in pure plain English words — no braces, no quotes, no semicolons, no punctuation.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Language Guide
      link: /guide/syntax-and-types
    - theme: alt
      text: Standard Library
      link: /reference/stdlib

features:
  - icon: ✍️
    title: Strictly Zero Symbols
    details: No =, {}, (), ;, ,, ., or " anywhere in your code. Every construct is expressed in readable English words separated by whitespace.
  - icon: ⚡
    title: Native AOT Binaries
    details: fksc compiles .fks source through a full Lexer → AST → Type Checker → Go CodeGen pipeline into fast native executables.
  - icon: 💤
    title: Lazy Action Bindings
    details: Assigning a void module call to a variable automatically creates a deferred thunk that runs only when invoked later.
  - icon: 🛡️
    title: Static Type Checking
    details: Catch type mismatches, arity errors, undeclared identifiers, and stray punctuation at compile time with line-numbered diagnostics.
  - icon: 📦
    title: Batteries Included
    details: Built-in print, math, text, file, and time modules — only the Go packages your program uses are emitted.
  - icon: 🔧
    title: Zero-Dependency Compiler
    details: The entire fksc compiler lives in a single self-contained Go file using only the Go standard library.
---

## A Taste of FakeScript

::: code-group

```text [hello.fks]
note pure zero symbol fakescript program

import print

fn add with num a and num b returns num do
    give back a plus b
end

let shout be ln of print contains say FakeScript is fast end

fn main do
    shout
    let sum be exec add with 20 and 22
    ln of print contains say answer is end and sum
end

exec main
```

```go [fksc emit hello.fks]
package main

import (
	"fmt"
)

var shout func()

func add(a int64, b int64) int64 {
	return (a + b)
}

func fks_main() {
	shout()
	var sum int64 = add(int64(20), int64(22))
	fmt.Println("answer is", sum)
}

func main() {
	shout = func() { fmt.Println("FakeScript is fast") }
	fks_main()
}
```

:::
