# Hacker Sundae monorepo

This serves as the code monolith for our group. Use it for all your dev needs. Lets build, break and learn the things.

## Directorie Structure

```text
hackersundae
    web // next.js web app
```

## Getting Started (`nix`)

With a version of nix that has `nix-commands` and `flake` features enabled:

```bash
nix develop
```

This will create a bash environment with `yarn`, yarn autocompletion, and `nodejs` installed. It also configures some common command aliases for git and a custom shell prompt.
