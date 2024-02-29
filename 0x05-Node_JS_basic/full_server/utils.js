const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const fileContent = await fs.readFile(path, 'utf-8');
    const rows = fileContent.split('\n').slice(1);

    const fields = {};

    rows.forEach((row) => {
      const [firstname, , , field] = row.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database\n');
  }
}

module.exports = readDatabase;
