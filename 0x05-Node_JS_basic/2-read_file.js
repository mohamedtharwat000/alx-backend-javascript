const { readFileSync, existsSync } = require('node:fs');

module.exports = function countStudents(path) {
  if (!existsSync(path)) throw new Error('Cannot load the database');
  const file = readFileSync(path, 'utf-8');
  const data = file.split('\n').map((row) => row.split(','));
  data.pop();
  data.shift();
  const studentNumber = data.length;
  const fields = [];
  data.forEach((row) => {
    if (!fields.includes(row[3])) fields.push(row[3]);
  });
  console.log(`Number of students: ${studentNumber}`);
  fields.forEach((field) => {
    const students = data.filter((row) => row[3] === field);
    const studentNames = students.map((student) => student[0]).join(', ');
    console.log(
      `Number of students in ${field}: ${students.length}. List: ${studentNames}`,
    );
  });
};
