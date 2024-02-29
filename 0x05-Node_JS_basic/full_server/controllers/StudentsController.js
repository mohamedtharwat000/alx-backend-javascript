const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    readDatabase('../../database.csv')
      .then((data) => {
        res.write('This is the list of our students\n');

        Object.keys(data)
          .sort((a, b) => a.localeCompare(b))
          .forEach((field) => {
            const studentsNumber = data[field].length;
            const studentList = data[field].join(', ');
            res.write(
              `Number of students in ${field}: ${studentsNumber}. List: ${studentList}\n`,
            );
          });

        res.end();
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase('../../database.csv')
      .then((data) => {
        if (data[major]) {
          res.send(`List: ${data[major].join(', ')}`);
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
