Job Tracker App

A simple job application tracker built with vanilla JavaScript, HTML, and browser localStorage. Add, view, and delete job applications — all data persists across page reloads.


preview.png

Features
Add jobs with company, role, date applied, and status

Display all jobs dynamically in a table

Delete individual job entries

Persistent storage using localStorage

Loads saved jobs automatically on page load

Getting Started
Prerequisites
Modern web browser with JavaScript enabled

No backend or database required

Installation
bash
Copy
Edit
git clone
cd job-tracker
open index.html
Or open index.html directly in your browser.

Usage
Enter job details in the form fields

Click Submit to add the job to your list

Delete jobs as needed — both from the page and localStorage

Lessons Learned
Working with localStorage: Storing and retrieving arrays of objects requires careful JSON serialization and parsing. Handling edge cases (empty or missing data) is key to avoiding errors.

Dynamic DOM manipulation: Creating table rows and cells programmatically helps keep the interface flexible and reactive.

Event delegation and memory management: Attaching event listeners to dynamically created elements requires attention to scope and cleanup.

Data consistency: Keeping UI and storage in sync after deletions is essential for a smooth user experience.

Debugging: Using browser developer tools (console, inspector) accelerated the troubleshooting process, especially with asynchronous events like DOMContentLoaded and form submissions.

Future Improvements
Add edit job functionality

Implement sorting and filtering by status or date

Improve UI with CSS frameworks or custom styles

Add validation and error feedback on form inputs

Use a frontend framework (React, Vue, etc.) for better state management

Support for exporting/importing job data as CSV or JSON files

Code Overview
index.html: Form and table structure

script.js: Handles event listeners, DOM updates, and localStorage syncing

Jobs stored as JSON objects in localStorage under the key "jobs"

Contributing
Contributions and suggestions are welcome! Please open an issue or submit a pull request.


Author
Joshua Agbor

