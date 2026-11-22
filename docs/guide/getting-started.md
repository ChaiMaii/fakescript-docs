# Quick Start

## Prerequisites

- **Go 1.22+** installed and available on your `PATH` (for building `fksc` and compiling `.fks` binaries). No C compiler or external dependencies are needed.

## 1. Build the Compiler

From the FakeScript repository root:

```powershell
go build -o fksc.exe fksc.go
```

On macOS or Linux:

```bash
go build -o fksc fksc.go
```

Verify the installation:

```powershell
.\fksc.exe version
# fksc v3.0.0 (windows/amd64)
```

## 2. Write Your First Program

Create a file named `hello.fks`:

```text
note my first fakescript program

import print

fn greet with text name do
    ln of print contains say hello end and name
end

exec greet with say world end
```

## 3. Run or Build

Run directly without leaving a binary behind:

```powershell
.\fksc.exe run hello.fks
# hello world
```

Or compile to a standalone native executable (`hello.exe` on Windows, `hello` on Unix):

```powershell
.\fksc.exe build hello.fks
.\hello.exe
```

## 4. Inspect Generated Go

Want to see what `fksc` produces under the hood?

```powershell
.\fksc.exe emit hello.fks
```

::: tip Fast Type-Checking
Use `.\fksc.exe check hello.fks` to lex, parse, and type-check your code in milliseconds without invoking `go build`.
:::
