interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const body: HTMLBodyElement | null = document.querySelector('body');
  
  if (body) {
    const table: HTMLTableElement = document.createElement('table');
    const thead: HTMLTableSectionElement = document.createElement('thead');
    const tbody: HTMLTableSectionElement = document.createElement('tbody');

    const headerRow: HTMLTableRowElement = document.createElement('tr');
    const firstNameHeader: HTMLTableCellElement = document.createElement('th');
    const locationHeader: HTMLTableCellElement = document.createElement('th');

    firstNameHeader.textContent = 'First Name';
    locationHeader.textContent = 'Location';

    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);

    studentsList.forEach((student: Student) => {
      const row: HTMLTableRowElement = document.createElement('tr');
      const firstNameCell: HTMLTableCellElement = document.createElement('td');
      const locationCell: HTMLTableCellElement = document.createElement('td');

      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;

      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    body.appendChild(table);
  }
}

document.addEventListener('DOMContentLoaded', renderTable);
