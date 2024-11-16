# NFCActions

Control your computer with an NFC or RFID device.

## Description

NFCActions allows for you to use any NFC tag or card (think old hotel keys, cruise cards, even some passports) to perform any action on your NFC-compatible computer. By scanning the tag on your computer's NFC sensor, you can open websites, applications, and run commands.

## Instructions

### Setting up

#### Prerequisites

##### Windows

- Installation of Microsoft Visual Studio with "Desktop development with C++"
- Node.js and npm

##### macOS

- Node.js and npm

##### Linux

- pcsclite library, pcsc daemon (Debian-based: `apt install libpcsclite1 libpcsclite-dev pcscd`)

#### Installation

Download the repository by clicking the green Code button on the repository home, or run
```shell
git clone https://github.com/xtt28/nfcactions.git
```

In the cloned repository folder, run `npm install`.

#### Registering your NFC card

Make sure that you have an NFC reader built into your computer or connected via USB. You will also need an NFC or RFID-compatible card or tag.

Execute `npm run setup`, choose "Register a new tag" and follow your instructions to register your tag.

### Usage

To activate the application, run `npm run start`. As long as the application is open, it will constantly be listening for the NFC tag.

> [!IMPORTANT]  
> When starting the application, please ensure that a message is printed to show that your NFC reader was detected.
> Example: `Detected NFC/smartcard device: Broadcom Corp Contactless Smartcard 0`

#### Deleting and Updating Actions

Execute `npm run setup` to open the setup utility. From there, you can choose to update a tag with the "Register a new tag" option or delete a tag's actions with the "Delete tag data" option.

## Data directory

### Windows

`%APPDATA%\.nfcactions`

### Other operating systems

`~/.nfcactions`

## License

MIT License. (See LICENSE file for details)