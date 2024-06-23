#!/usr/bin/node

// import the request module
const request = require('request');

// define first argument
const url = process.argv[2];

// error handling
if (!url) {
  console.error('Please provide the API URL as the first argument');
  process.exit(1);
}

// the request function
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } const films = JSON.parse(body).results;
  let count = 0;
  for (const filmIndex in films) {
    const filmChars = films[filmIndex].characters;
    for (const charIndex in filmChars) {
      if (filmChars[charIndex].includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
