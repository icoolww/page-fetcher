

const fs = require('fs')

// const content = 'Some content!';

const request = require('request');
request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the example.edu homepage.
  
  fs.writeFile('index.html', body, err => {
    if (err) {
      console.log(error(err))
      return;
    }
    //file written successfully
  })
  
});


// Downloaded and saved 3261 bytes to ./index.html