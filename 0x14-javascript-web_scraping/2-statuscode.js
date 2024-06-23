#!/usr/bin/node

// import the request module
const request = require('request');

// get the url from command-line arguments
const url = process.argv[2];

// check if URL exists
if (!url) {
  console.error('Please provide a URL as the first argument');
}

// make the GET request
request(url, (error, response, body) => {
  if (error) {
    // print the error if there is one
    console.error('Error:', error);
    return;
  }
  // print the status code
  console.log('code:', response.statusCode);
});
