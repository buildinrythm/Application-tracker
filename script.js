// === DOM Elements ===
const form = document.getElementById('job-form');
const jobList = document.querySelector('#job-list tbody');
const addJobBtn = document.getElementById('add-job-btn');
const filterButtons = document.querySelectorAll('.filter');

// === Local Storage Data ===
let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

// === Render Jobs ===
function renderJobs(filter = 'All') {
  jobList.innerHTML = '';

  const filteredJobs = filter === 'All'
    ? jobs
    : jobs.filter(job => job.status === filter);

  filteredJobs.forEach((job, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${job.company}</td>
      <td>${job.role}</td>
      <td>${job.date}</td>
      <td>${job.status}</td>
    `;

    jobList.appendChild(row);
  });
}

// === Handle Form Submission ===
form.addEventListener('submit', e => {
  e.preventDefault();

  const company = form.company.value.trim();
  const role = form.role.value.trim();
  const date = form.date.value;
  const status = form.status.value;

  if (!company || !role || !date || !status) return;

  const newJob = { company, role, date, status };
  jobs.push(newJob);
  localStorage.setItem('jobs', JSON.stringify(jobs));

  form.reset();
  renderJobs();
});

// === Filter Buttons ===
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const status = button.getAttribute('data-status');
    renderJobs(status);
  });
});

// === Init ===
renderJobs();
