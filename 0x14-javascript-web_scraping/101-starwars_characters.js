#!/usr/bin/node

// import request module
const request = require('request');

// define the arguments
const id = process.argv[2];
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

// error handling
if (!id) {
  console.error('Please enter the movie ID as the first argument');
  process.exit(1);
}

// the request function
request(apiUrl + id, (error, response, body) => {
  if (error) {
    console.error('Error: ', error);
  } if (response.statusCode === 200) {
    const acts = JSON.parse(body);
    const actors = acts.characters;
    themChars(actors, 0);
  }
});

// another request to pick oout the names
function themChars (actors, i) {
  request(actors[i], (error, response, body) => {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (i + 1 < actors.length) {
        themChars(actors, i + 1);
      }
    }
  });
}
