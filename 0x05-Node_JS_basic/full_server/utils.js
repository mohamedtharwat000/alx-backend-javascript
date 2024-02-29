const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((fileContent) => {
        const rows = fileContent.split('\n').slice(1, -1);
        const fields = {};

        rows.forEach((row) => {
          const [firstname, , , field] = row.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        });

        resolve(fields);
      })
      .catch(() => {
        reject(new Error('Cannot load the database\n'));
      });
  });
}

module.exports = readDatabase;
