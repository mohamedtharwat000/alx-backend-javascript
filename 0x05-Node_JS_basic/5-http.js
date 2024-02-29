const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    let result = 'This is the list of our students\n';
    const file = await fs.readFile(path, 'utf-8');
    const data = file.split('\n').map((row) => row.split(','));
    data.pop();
    data.shift();
    const studentNumber = data.length;
    const fields = [];
    data.forEach((row) => {
      if (!fields.includes(row[3])) fields.push(row[3]);
    });
    result += `Number of students: ${studentNumber}${'\n'}`;
    fields.forEach((field) => {
      const students = data.filter((row) => row[3] === field);
      const names = students.map((student) => student[0]).join(', ');
      result += `Number of students in ${field}: ${students.length}. List: ${names}${'\n'}`;
    });
    return Promise.resolve(result);
  } catch (err) {
    return Promise.reject(Error('Cannot load the database'));
  }
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') res.end('Hello Holberton School!');

  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(
        (data) => res.end(data),
        (err) => {
          res.statusCode = 404;
          res.end(err.message);
        },
      );
  }
});

app.listen(1245, null);

module.exports = app;
