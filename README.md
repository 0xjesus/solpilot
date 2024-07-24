SolPilot
=================

SolPilot is a command-line interface (CLI) tool designed to interact with the Solana blockchain. It allows users to perform essential wallet operations such as generating keypairs, requesting airdrops of SOL tokens, and sending SOL tokens to other wallets. The tool is built using the Oclif framework and leverages Solana's Web3.js library for blockchain interactions.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/solpilot.svg)](https://npmjs.org/package/solpilot)
[![Downloads/week](https://img.shields.io/npm/dw/solpilot.svg)](https://npmjs.org/package/solpilot)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Usage
<!-- usage -->
```sh-session
$ npm install -g solpilot
$ solpilot COMMAND
running command...
$ solpilot (--version)
solpilot/1.1.0 linux-x64 node-v18.20.4
$ solpilot --help [COMMAND]
USAGE
  $ solpilot COMMAND
...
```
<!-- usagestop -->

## Commands
<!-- commands -->
* [`solpilot airdrop`](#solpilot-airdrop)
* [`solpilot generate-keypair`](#solpilot-generate-keypair)
* [`solpilot help [COMMAND]`](#solpilot-help-command)
* [`solpilot list-selected-wallet`](#solpilot-list-selected-wallet)
* [`solpilot list-wallets`](#solpilot-list-wallets)
* [`solpilot select-wallet`](#solpilot-select-wallet)
* [`solpilot send`](#solpilot-send)
* [`solpilot set-config`](#solpilot-set-config)
* [`solpilot show-private-key`](#solpilot-show-private-key)

## `solpilot airdrop`

Request an airdrop to a provided Solana address.

### Usage

```sh
solpilot airdrop --address <wallet_address> --amount <amount>
```

### Flags

- `--address, -a`: Solana wallet address to receive the airdrop.
- `--amount, -m`: Amount of SOL to airdrop.

### Description

Request an airdrop to a provided Solana address.

### Example

```sh
solpilot airdrop --address <wallet_address> --amount <amount>
```

_See code: [src/commands/airdrop.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/airdrop.ts)_

## `solpilot generate-keypair`

Generate a Solana keypair and save it as one of the user's wallets.

### Usage

```sh
solpilot generate-keypair --file <path/to/save/keypair.json>
```

### Flags

- `--file, -f`: Path to the directory to save the keypair (optional).

### Description

Generate a Solana keypair and save it as one of the user's wallets.

### Example

```sh
solpilot generate-keypair --file ./wallets/my-keypair.json
```

_See code: [src/commands/generate-keypair.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/generate-keypair.ts)_

## `solpilot help [COMMAND]`

Display help for solpilot.

### Usage

```sh
solpilot help [COMMAND...]
```

### Arguments

- `COMMAND...`: Command to show help for.

### Flags

- `--nested-commands, -n`: Include all nested commands in the output.

### Description

Display help for solpilot.

### Example

```sh
solpilot help airdrop
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.7/src/commands/help.ts)_

## `solpilot list-selected-wallet`

List the details of the selected wallet.

### Usage

```sh
solpilot list-selected-wallet --file <path/to/wallets>
```

### Flags

- `--file, -f`: Path to the directory where the selected wallet is saved (optional).

### Description

List the details of the selected wallet.

### Example

```sh
solpilot list-selected-wallet --file ./wallets
```

_See code: [src/commands/list-selected-wallet.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/list-selected-wallet.ts)_

## `solpilot list-wallets`

List all wallets and their data.

### Usage

```sh
solpilot list-wallets --file <path/to/wallets>
```

### Flags

- `--file, -f`: Path to the directory where wallets are saved (optional).

### Description

List all wallets and their data.

### Example

```sh
solpilot list-wallets --file ./wallets
```

_See code: [src/commands/list-wallets.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/list-wallets.ts)_

## `solpilot select-wallet`

Select a wallet to use.

### Usage

```sh
solpilot select-wallet --file <path/to/wallets>
```

### Flags

- `--file, -f`: Path to the directory where wallets are saved (optional).

### Description

Select a wallet to use.

### Example

```sh
solpilot select-wallet --file ./wallets
```

_See code: [src/commands/select-wallet.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/select-wallet.ts)_

## `solpilot send`

Send SOL to a specified address.

### Usage

```sh
solpilot send --to <to_wallet> --amount <amount>
```

### Flags

- `--amount, -a`: Amount of SOL to send (optional).
- `--to, -t`: Recipient Solana wallet address (optional).

### Description

Send SOL to a specified address.

### Example

```sh
solpilot send --to <to_wallet> --amount <amount>
```

_See code: [src/commands/send.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/send.ts)_

## `solpilot set-config`

Set the network configuration to devnet, testnet, or mainnet.

### Usage

```sh
solpilot set-config --network <network>
```

### Flags

- `--network, -n`: Network to set (devnet, testnet, mainnet).

### Description

Set the network configuration to devnet, testnet, or mainnet.

### Example

```sh
solpilot set-config --network devnet
```

_See code: [src/commands/set-config.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/set-config.ts)_

## `solpilot show-private-key`

Show the private key of a selected wallet.

### Usage

```sh
solpilot show-private-key --file <path/to/wallets>
```

### Flags

- `--file, -f`: Path to the directory where wallets are saved (optional).

### Description

Show the private key of a selected wallet.

### Example

```sh
solpilot show-private-key --file ./wallets
```

_See code: [src/commands/show-private-key.ts](https://github.com/0xjesus/solpilot/blob/v1.1.0/src/commands/show-private-key.ts)_

<!-- commandsstop -->

---