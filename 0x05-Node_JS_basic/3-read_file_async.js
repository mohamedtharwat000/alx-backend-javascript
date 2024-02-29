const fs = require('fs').promises;

module.exports = async function countStudents(path) {
  try {
    const file = await fs.readFile(path, 'utf-8');
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
      const names = students.map((student) => student[0]).join(', ');
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${names}`,
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
