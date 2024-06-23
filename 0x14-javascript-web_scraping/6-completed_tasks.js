#!/usr/bin/node

// import the request module
const request = require('request');

// define the arguments
const url = process.argv[2];

// error handling
if (!url) {
  console.error('Please provide the URL as the first argument');
  process.exit(1);
}

// the request function
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } const datas = JSON.parse(body);
  const users = {};
  datas.forEach(data => {
    if (data.completed) {
      if (users[data.userId]) {
        users[data.userId]++;
      } else {
        users[data.userId] = 1;
      }
    }
  });
  console.log(users);
});
