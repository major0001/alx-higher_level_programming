#!/usr/bin/node

// import the fs module
const fs = require('fs');

// get the file from the command-line arguments
const file = process.argv[2];

// give an error if file does not exist
if (!file) {
	console.error('Please provide a file as the first argument.');
	process.exits(1);
}

// read the file content in UTF-8 encoding
fs.readFile(file, 'utf-8', (err, data) => {
	if (err) {
		// print the error object ifan error occurred
		console.error(err);
		return;
	}
	// print the file contents
	console.log(data);
});
