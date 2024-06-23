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
  } else if (response.statusCode === 200) {
    const acts = JSON.parse(body);
    const actors = acts.characters;

    // another request to pick oout the names
    actors.forEach(i => {
      request(i, (error, response, names) => {
        if (error) {
          console.error('Error: ', error);
        } const nn = JSON.parse(names);
        console.log(nn.name);
      });
    });
  } else {
    console.error('Error code: ', response.statusCode);
  }
});
