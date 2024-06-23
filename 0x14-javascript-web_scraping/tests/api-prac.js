#!/usr/bin/node

// importing request library
const request = require('request');

// define url and movie id
const id = process.argv[2];
const url1 = 'https://swapi-api.alx-tools.com/api/films/';

// error handling
if (!id) {
  console.error('Please enter the movie id to proceed');
  process.exit(1);
}

// the request function
request(url1 + id, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } const data = JSON.parse(body);
  console.log(data.title);
});
