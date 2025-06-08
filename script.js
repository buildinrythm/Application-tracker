const form = document.getElementById('job-form');
const table = document.getElementById('job-table');

// Helper to create a row and add delete functionality
function createTableRow(rowData, index) {
  const newRow = document.createElement('tr');

  ['company', 'role', 'status', 'date'].forEach((key) => {
    const cell = document.createElement('td');
    cell.textContent = rowData[key];
    newRow.appendChild(cell);
  });

  // Create delete button
  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    newRow.remove();

    // Remove from localStorage
    const allRows = JSON.parse(localStorage.getItem('allRows')) || [];
    allRows.splice(index, 1);
    localStorage.setItem('allRows', JSON.stringify(allRows));

    // Reload the table to re-index buttons
    reloadTable();
  });

  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);

  return newRow;
}

// Reloads the whole table (used after deletion to re-index)
function reloadTable() {
  const allRows = JSON.parse(localStorage.getItem('allRows')) || [];
  table.innerHTML = ''; // Clear all rows

  allRows.forEach((rowData, index) => {
    const row = createTableRow(rowData, index);
    table.appendChild(row);
  });
}

// Form submit logic
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const rowData = {
    company: document.getElementById('company').value,
    role: document.getElementById('role').value,
    status: document.getElementById('status').value,
    date: document.getElementById('date').value,
  };

  // Save to localStorage
  const allRows = JSON.parse(localStorage.getItem('allRows')) || [];
  allRows.push(rowData);
  localStorage.setItem('allRows', JSON.stringify(allRows));

  // Append new row to table
  const newRow = createTableRow(rowData, allRows.length - 1);
  table.appendChild(newRow);

  form.reset();
});

// Load saved rows on page load
document.addEventListener('DOMContentLoaded', reloadTable);
