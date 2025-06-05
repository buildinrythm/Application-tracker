const form = document.getElementById('job-form')
const table = document.getElementById('job-table')
/* Stop browser reset */
form.addEventListener('submit', function(event) {
event.preventDefault();

const companyInput = document.getElementById('company')
const roleInput = document.getElementById('role')
const statusInput = document.getElementById('status')
const dateInput = document.getElementById('date')

/* Collecting input values */
const company = companyInput.value;
const role = roleInput.value;
const status = statusInput.value;
const date = dateInput.value;

console.log(company)
console.log(role)
console.log(status)
console.log(date)

const newRow = document.createElement('tr')
const companyCell = document.createElement('td')
const roleCell = document.createElement('td')
const statusCell = document.createElement('td')
const dateCell = document.createElement('td')

/* Creating and attatching cells to the row */
companyCell.textContent = company;
roleCell.textContent = role;
statusCell.textContent = status;
dateCell.textContent = date;

newRow.appendChild(companyCell);
newRow.appendChild(roleCell);
newRow.appendChild(statusCell);
newRow.appendChild(dateCell);

/* attatching row to the table */
table.appendChild(newRow);

/* reset the form */
form.reset();

console.log(newRow)

const rowData = [company,role, status, date]

// 1. Get existing rows from localStorage or start with an empty array
const allRows = JSON.parse(localStorage.getItem('allRows')) || [];

// 2. Add the current row to the array
allRows.push(rowData);

// 3. Save the updated array back into localStorage
localStorage.setItem('allRows', JSON.stringify(allRows));

localStorage.setItem('rowData', JSON.stringify(rowData))
const retrievedRow = JSON.parse(localStorage.getItem('rowData'))

console.log("Saved to localStorage:", localStorage.getItem('rowData'));

});