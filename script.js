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



function removeFromStorage(jobToRemove) {
  let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
  jobs = jobs.filter(function (job) {
    return !(
      job.company === jobToRemove.company &&
      job.role === jobToRemove.role &&
      job.status === jobToRemove.status &&
      job.date === jobToRemove.date
    );
  });
  localStorage.setItem('jobs', JSON.stringify(jobs));
}



});

// Load jobs from localStorage on page load
window.addEventListener('DOMContentLoaded', function () {
  const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];

  savedJobs.forEach(function (job) {
    const newRow = document.createElement('tr');

    const companyCell = document.createElement('td');
    companyCell.textContent = job.company;
    newRow.appendChild(companyCell);

    const roleCell = document.createElement('td');
    roleCell.textContent = job.role;
    newRow.appendChild(roleCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = job.date;
    newRow.appendChild(dateCell);

    const statusCell = document.createElement('td');
    statusCell.textContent = job.status;
    newRow.appendChild(statusCell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', function () {
      newRow.remove();
      removeFromStorage(job);
    });

    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    jobTable.appendChild(newRow);
  });
});