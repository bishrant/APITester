const https = require('https');
const fs = require('fs');

const req = https.get('https://jsonplaceholder.typicode.com/todos/1', res => {
  const data = `${new Date()}, ${res.statusCode} \n`;
  console.log(data);
  fs.appendFile("stats.txt", data, (e, d) => {});
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error);
  const data = `----------------\n${new Date()}, ${error} \n-------------\n`;
  fs.appendFile("stats.txt", data, (e, d) => {});
})

req.end()