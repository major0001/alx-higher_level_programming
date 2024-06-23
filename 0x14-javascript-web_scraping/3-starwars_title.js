#!/usr/bin/node

// import the request module
const request = require('request');

// define the id argument
const episodeNum = process.argv[2];
const API_URL = 'https://swapi-api.hbtn.io/api/films/';

// check if user has given the id
if (!episodeNum) {
  // print error in the console
  console.log('Please provide the movie id as the first argument');
  process.exit(1);
}

// make the request
request(API_URL + episodeNum, function (error, response, body) {
  if (error) {
    console.log('Error:', error);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code:' + response.statusCode);
  }
});
