# Sudoo-Magic

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Magic.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Magic)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Magic/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Magic)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fmagic.svg)](https://badge.fury.io/js/%40sudoo%2Fmagic)
[![downloads](https://img.shields.io/npm/dm/@sudoo/magic.svg)](https://www.npmjs.com/package/@sudoo/magic)

:dove: Magic

## Install

```sh
yarn add @sudoo/magic
# Or
npm install @sudoo/magic --save
```

## Usage

Example usage of time builder

```ts
import { TimeBuilder } from "@sudoo/magic";

setTimeout(() => {
    doSomething();
}, TimeBuilder.from({
    second: 1,
}).inMilliseconds());
```
