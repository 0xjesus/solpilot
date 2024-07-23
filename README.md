solpilot
=================

SolPilot is a command-line interface (CLI) tool designed to interact with the Solana blockchain. It allows users to perform essential wallet operations such as generating keypairs, requesting airdrops of SOL tokens, and sending SOL tokens to other wallets. The tool is built using the Oclif framework and leverages Solana's Web3.js library for blockchain interactions.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/solpilot.svg)](https://npmjs.org/package/solpilot)
[![Downloads/week](https://img.shields.io/npm/dw/solpilot.svg)](https://npmjs.org/package/solpilot)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g solpilot
$ solpilot COMMAND
running command...
$ solpilot (--version)
solpilot/0.0.0 linux-x64 node-v18.19.0
$ solpilot --help [COMMAND]
USAGE
  $ solpilot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`solpilot hello PERSON`](#solpilot-hello-person)
* [`solpilot hello world`](#solpilot-hello-world)
* [`solpilot help [COMMAND]`](#solpilot-help-command)
* [`solpilot plugins`](#solpilot-plugins)
* [`solpilot plugins add PLUGIN`](#solpilot-plugins-add-plugin)
* [`solpilot plugins:inspect PLUGIN...`](#solpilot-pluginsinspect-plugin)
* [`solpilot plugins install PLUGIN`](#solpilot-plugins-install-plugin)
* [`solpilot plugins link PATH`](#solpilot-plugins-link-path)
* [`solpilot plugins remove [PLUGIN]`](#solpilot-plugins-remove-plugin)
* [`solpilot plugins reset`](#solpilot-plugins-reset)
* [`solpilot plugins uninstall [PLUGIN]`](#solpilot-plugins-uninstall-plugin)
* [`solpilot plugins unlink [PLUGIN]`](#solpilot-plugins-unlink-plugin)
* [`solpilot plugins update`](#solpilot-plugins-update)

## `solpilot hello PERSON`

Say hello

```
USAGE
  $ solpilot hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ solpilot hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/0xjesus/solpilot/blob/v0.0.0/src/commands/hello/index.ts)_

## `solpilot hello world`

Say hello world

```
USAGE
  $ solpilot hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ solpilot hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/0xjesus/solpilot/blob/v0.0.0/src/commands/hello/world.ts)_

## `solpilot help [COMMAND]`

Display help for solpilot.

```
USAGE
  $ solpilot help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for solpilot.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.7/src/commands/help.ts)_

## `solpilot plugins`

List installed plugins.

```
USAGE
  $ solpilot plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ solpilot plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/index.ts)_

## `solpilot plugins add PLUGIN`

Installs a plugin into solpilot.

```
USAGE
  $ solpilot plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into solpilot.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SOLPILOT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SOLPILOT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ solpilot plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ solpilot plugins add myplugin

  Install a plugin from a github url.

    $ solpilot plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ solpilot plugins add someuser/someplugin
```

## `solpilot plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ solpilot plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ solpilot plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/inspect.ts)_

## `solpilot plugins install PLUGIN`

Installs a plugin into solpilot.

```
USAGE
  $ solpilot plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into solpilot.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SOLPILOT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SOLPILOT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ solpilot plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ solpilot plugins install myplugin

  Install a plugin from a github url.

    $ solpilot plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ solpilot plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/install.ts)_

## `solpilot plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ solpilot plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ solpilot plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/link.ts)_

## `solpilot plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ solpilot plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ solpilot plugins unlink
  $ solpilot plugins remove

EXAMPLES
  $ solpilot plugins remove myplugin
```

## `solpilot plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ solpilot plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/reset.ts)_

## `solpilot plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ solpilot plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ solpilot plugins unlink
  $ solpilot plugins remove

EXAMPLES
  $ solpilot plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/uninstall.ts)_

## `solpilot plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ solpilot plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ solpilot plugins unlink
  $ solpilot plugins remove

EXAMPLES
  $ solpilot plugins unlink myplugin
```

## `solpilot plugins update`

Update installed plugins.

```
USAGE
  $ solpilot plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/update.ts)_
<!-- commandsstop -->
