const fs = require('fs');
const request = require('request');
const URL = process.argv.slice(2)[0];
const path = process.argv.slice(2)[1];

request(URL, (error, response, body) => {
  if (response.statusCode !== 200) {
    console.log('error:',response.statusCode);
  }
  //console.log('error:', error); // Print the error if one occurred
  if (response.statusCode === 200) {
    fs.exists(path,(error) => {
      fs.writeFile(path,body,(err) => {
        if (err) throw err;
        fs.stat(path, function(err, stats) {
          console.log( `Downloaded and saved ${stats.size} bytes to ${path}`);
        });
        
      })
    })

  }
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
});

