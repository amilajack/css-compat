css-compat
=====================
[![Build Status](https://travis-ci.org/amilajack/css-compat.svg?branch=master&maxAge=2592000)](https://travis-ci.org/amilajack/css-compat)
[![NPM version](https://badge.fury.io/js/css-compat.svg?maxAge=2592000)](http://badge.fury.io/js/css-compat)
[![Dependency Status](https://img.shields.io/david/amilajack/css-compat.svg?maxAge=2592000)](https://david-dm.org/amilajack/css-compat)
[![npm](https://img.shields.io/npm/dm/css-compat.svg?maxAge=2592000)](https://npm-stat.com/charts.html?package=css-compat) [![Greenkeeper badge](https://badges.greenkeeper.io/amilajack/css-compat.svg)](https://greenkeeper.io/)

## Installation
```bash
npm install --save-dev css-compat
```

```js
import compat from 'css-compat'

compat('display', 'flex', compatTable)

// returns:
//
// {
//   supported: ['chrome', 'firefox', 'edge'],
//   prefixes: {
//     edge: '-ms-'
//   }
// }
```
