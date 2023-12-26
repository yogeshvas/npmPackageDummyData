#@yogesh.exe/dummy-data

[![npm version](https://badge.fury.io/js/dummy-datalizer.svg)](https://www.npmjs.com/package/dummy-datalizer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Generate customizable dummy data arrays with ease! `@yogesh.exe/dummy-data` is a lightweight npm package that simplifies the creation of dummy data for your testing and development needs.

## Installation

```bash
npm install dummy-datalizer
```

## Usage

```bash
const genrateData = require('@yogesh.exe/dummy-data');

const fields = [
  { name: 'name', type: 'string' },
  { name: 'age', type: 'number' },
  { name: 'avatar', type: 'image' },
];

const dummyData = genrateData(5, fields);
console.log(dummyData);
```





