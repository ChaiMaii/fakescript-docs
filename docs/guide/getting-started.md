# Quick Start

## Prerequisites

- **Go 1.22+** installed and available on your `PATH` (used to build `fksc`, `fkspm`, and native `.fks` binaries). No C compiler or external dependencies are needed.

## 1. Quick Install (`fksc` + `fkspm`)

Install both the **FakeScript compiler (`fksc`)** and the **package manager (`fkspm`)** using the visual installer:

::: code-group

```powershell [Windows (PowerShell)]
irm https://raw.githubusercontent.com/ChaiMaii/fakescript/main/install.ps1 | iex
```

```bash [Linux / macOS]
curl -fsSL https://raw.githubusercontent.com/ChaiMaii/fakescript/main/install.sh | sh
```

:::

The visual installer downloads and compiles `fksc` and `fkspm`, places them in your user bin directory, and adds them to your `PATH`.

Verify both tools:

```powershell
fksc version
fkspm version
```

### Build Manually from Source

If you prefer building directly from a cloned repository:

```powershell
go build -o fksc.exe fksc.go
```

On macOS or Linux:

```bash
go build -o fksc fksc.go
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
