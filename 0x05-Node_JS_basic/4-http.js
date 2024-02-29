const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Holberton School!\n');
  res.end();
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
