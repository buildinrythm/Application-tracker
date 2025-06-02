const jobForm = document.getElementById('job-form');
const jobTable = document.getElementById('job-table');

 jobForm.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log(event)
const companyInput = document.getElementById('company');
const roleInput = document.getElementById('role');
const statusInput = document.getElementById('status');
const dateInput = document.getElementById('date');

console.log("Company:", companyInput.value);
console.log("Role:", roleInput.value);
console.log("Status:", statusInput.value);
console.log("Date:", dateInput.value);

const newRow = document.createElement('tr');

const companyCell = document.createElement('td');
companyCell.textContent = companyInput.value;
newRow.appendChild(companyCell);

const roleCell = document.createElement('td');
roleCell.textContent = roleInput.value;
newRow.appendChild(roleCell);

const dateCell = document.createElement('td');
dateCell.textContent = dateInput.value;
newRow.appendChild(dateCell);

const statusCell = document.createElement('td');
statusCell.textContent = statusInput.value;
newRow.appendChild(statusCell);

jobTable.appendChild(newRow);

companyInput.value = '';
roleInput.value = '';
statusInput.value = '';
dateInput.value = '';

});
