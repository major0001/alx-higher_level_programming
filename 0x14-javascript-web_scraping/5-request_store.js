#!/usr/bin/node

// import the request module
const request = require('request');
const fs = require('fs');

// define the arguments
const url = process.argv[2];
const file = process.argv[3];

// error handling
if (!url || !file) {
  console.error('Please enter the webpage url and file you would like the contents stored');
  process.exit(1);
}

// the request function
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  }
  fs.writeFile(file, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
