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
const tableCell = document.createElement('td')

tableCell.textContent = (company.value, role.value);

console.log(tableCell)
})