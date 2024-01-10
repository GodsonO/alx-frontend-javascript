// Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects and store them in studentsList array
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

// Render a table and append a new row for each student in the studentsList array
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
const headerLocation = document.createElement("th");

headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const cellFirstName = document.createElement("td");
  const cellLocation = document.createElement("td");

  cellFirstName.textContent = student.firstName;
  cellLocation.textContent = student.location;

  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);
  table.appendChild(row);
});

document.body.appendChild(table);
