const form = document.getElementById('job-form');
const jobTable = document.getElementById('job-table');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const companyInput = document.getElementById('company');
  const roleInput = document.getElementById('role');
  const dateInput = document.getElementById('date');
  const statusInput = document.getElementById('status');

  const company = companyInput.value;
  const role = roleInput.value;
  const date = dateInput.value;
  const status = statusInput.value;

  // Create a new row and cells
  const newRow = document.createElement('tr');

  const companyCell = document.createElement('td');
  companyCell.textContent = company;
  newRow.appendChild(companyCell);

  const roleCell = document.createElement('td');
  roleCell.textContent = role;
  newRow.appendChild(roleCell);

  const dateCell = document.createElement('td');
  dateCell.textContent = date;
  newRow.appendChild(dateCell);

  const statusCell = document.createElement('td');
  statusCell.textContent = status;
  newRow.appendChild(statusCell);

  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);

  jobTable.appendChild(newRow);

  // Delete button functionality
  deleteButton.addEventListener('click', function(){
    newRow.remove();

    // Reload saved jobs
    let savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Filter out the job that matches the row's data
    savedJobs = savedJobs.filter(job => {
      return !(
        job.company === companyCell.textContent &&
        job.role === roleCell.textContent &&
        job.status === statusCell.textContent &&
        job.date === dateCell.textContent
      );
    });

    // Update localStorage with filtered jobs
    localStorage.setItem('jobs', JSON.stringify(savedJobs));
  });

  // Save the new job entry in localStorage
  const newEntry = {
    company: company,
    role: role,
    status: status,
    date: date
  };

  let savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
  savedJobs.push(newEntry);
  localStorage.setItem('jobs', JSON.stringify(savedJobs));

  // Clear form inputs after submission (optional)
  companyInput.value = '';
  roleInput.value = '';
  dateInput.value = '';
  statusInput.value = '';
});

document.addEventListener('DOMContentLoaded', function () {
  const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];

  savedJobs.forEach(function(job) {
    const newRow = document.createElement('tr');

    const companyCell = document.createElement('td');
    companyCell.textContent = job.company;

    const roleCell = document.createElement('td');
    roleCell.textContent = job.role;

    const statusCell = document.createElement('td');
    statusCell.textContent = job.status;

    const dateCell = document.createElement('td');
    dateCell.textContent = job.date;

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener('click', function(){
      newRow.remove();

      // Reload saved jobs
      let savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];

      // Filter out the job that matches the row's data
      savedJobs = savedJobs.filter(j => {
        return !(
          j.company === companyCell.textContent &&
          j.role === roleCell.textContent &&
          j.status === statusCell.textContent &&
          j.date === dateCell.textContent
        );
      });

      // Update localStorage with filtered jobs
      localStorage.setItem('jobs', JSON.stringify(savedJobs));
    });

    newRow.appendChild(companyCell);
    newRow.appendChild(roleCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(deleteCell);

    jobTable.appendChild(newRow);
  });
});
