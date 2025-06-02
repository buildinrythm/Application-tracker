const jobForm = document.getElementById('job-form');
const jobTable = document.getElementById('job-table');

 jobForm.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log(event)
const companyInput = document.getElementById('company');
const roleInput = document.getElementById('role');
const statusInput = document.getElementById('status');
const dateInput = document.getElementById('date');

const job = {
  company: companyInput.value,
  role: roleInput.value,
  status: statusInput.value,
  date: dateInput.value
};

let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
jobs.push(job);
localStorage.setItem('jobs', JSON.stringify(jobs));

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

companyInput.value = '';
roleInput.value = '';
statusInput.value = '';
dateInput.value = '';

const deleteCell = document.createElement('td');
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.classList.add('delete-btn');

deleteButton.addEventListener('click', function(){
    newRow.remove();
});

deleteCell.appendChild(deleteButton);
newRow.appendChild(deleteCell);

jobTable.appendChild(newRow);



});
