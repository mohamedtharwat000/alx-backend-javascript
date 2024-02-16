interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' },
  { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Los Angeles' },
];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();

  const firstName = row.insertCell(0);
  const lastName = row.insertCell(1);
  const age = row.insertCell(2);
  const location = row.insertCell(3);

  firstName.textContent = student.firstName;
  lastName.textContent = student.lastName;
  age.textContent = student.age.toString();
  location.textContent = student.location;
});
