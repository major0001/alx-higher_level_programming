#!/usr/bin/node

// import the fs module
const fs = require('fs');

// the function taakes the first and second argument in the command-line process
const file = process.argv[2];
const string = process.argv[3];

// checking if file exits
fs.writeFile(file, string, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
