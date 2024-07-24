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
solpilot/1.0.0 linux-x64 node-v18.19.0
$ solpilot --help [COMMAND]
USAGE
  $ solpilot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`solpilot airdrop [FILE]`](#solpilot-airdrop-file)
* [`solpilot generate-keypair`](#solpilot-generate-keypair)
* [`solpilot help [COMMAND]`](#solpilot-help-command)
* [`solpilot list-wallets`](#solpilot-list-wallets)
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
* [`solpilot select-wallet`](#solpilot-select-wallet)
* [`solpilot send [FILE]`](#solpilot-send-file)
* [`solpilot show-private-key`](#solpilot-show-private-key)

## `solpilot airdrop [FILE]`

describe the command here

```
USAGE
  $ solpilot airdrop [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ solpilot airdrop
```

_See code: [src/commands/airdrop.ts](https://github.com/0xjesus/solpilot/blob/v1.0.0/src/commands/airdrop.ts)_

## `solpilot generate-keypair`

Generate a Solana keypair and save it as one of the user's wallets

```
USAGE
  $ solpilot generate-keypair [-f <value>]

FLAGS
  -f, --file=<value>  Path to the directory to save the keypair

DESCRIPTION
  Generate a Solana keypair and save it as one of the user's wallets

EXAMPLES
  $ solpilot generate-keypair --file <path/to/save/keypair.json>
```

_See code: [src/commands/generate-keypair.ts](https://github.com/0xjesus/solpilot/blob/v1.0.0/src/commands/generate-keypair.ts)_

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

## `solpilot list-wallets`

List all wallets and their data

```
USAGE
  $ solpilot list-wallets [-f <value>]

FLAGS
  -f, --file=<value>  Path to the directory where wallets are saved

DESCRIPTION
  List all wallets and their data

EXAMPLES
  $ solpilot list-wallets --file <path/to/wallets>
```

_See code: [src/commands/list-wallets.ts](https://github.com/0xjesus/solpilot/blob/v1.0.0/src/commands/list-wallets.ts)_

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

## `solpilot select-wallet`

Select a wallet to use

```
USAGE
  $ solpilot select-wallet -f <value> -i <value>

FLAGS
  -f, --file=<value>   (required) Path to the directory where wallets are saved
  -i, --index=<value>  (required) Index of the wallet to select

DESCRIPTION
  Select a wallet to use

EXAMPLES
  $ solpilot select-wallet --file <path/to/wallets> --index 1
```

_See code: [src/commands/select-wallet.ts](https://github.com/0xjesus/solpilot/blob/v1.0.0/src/commands/select-wallet.ts)_

## `solpilot send [FILE]`

describe the command here

```
USAGE
  $ solpilot send [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ solpilot send
```

_See code: [src/commands/send.ts](https://github.com/0xjesus/solpilot/blob/v1.0.0/src/commands/send.ts)_

## `solpilot show-private-key`

Show the private key of a selected wallet

```
USAGE
  $ solpilot show-private-key -f <value> -i <value>

FLAGS
  -f, --file=<value>   (required) Path to the directory where wallets are saved
  -i, --index=<value>  (required) Index of the wallet to show the private key for

DESCRIPTION
  Show the private key of a selected wallet

EXAMPLES
  $ solpilot show-private-key --file <path/to/wallets> --index 1
```

_See code: [src/commands/show-private-key.ts](https://github.com/0xjesus/solpilot/blob/v1.0.0/src/commands/show-private-key.ts)_
<!-- commandsstop -->
