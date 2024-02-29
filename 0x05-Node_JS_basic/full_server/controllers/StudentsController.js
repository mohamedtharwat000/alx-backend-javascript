const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        res.write('This is the list of our students');

        Object.keys(data)
          .sort((a, b) => a.localeCompare(b))
          .forEach((field) => {
            const studentsNumber = data[field].length;
            const studentList = data[field].join(', ');
            res.write(
              `\nNumber of students in ${field}: ${studentsNumber}. List: ${studentList}`,
            );
          });

        res.end();
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((data) => {
        if (data[major]) res.send(`List: ${data[major].join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;
