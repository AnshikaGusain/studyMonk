const searchForm = document.getElementById('search-form');
const candidatesList = document.getElementById('candidates-list');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const location = document.getElementById('location').value;
  const jobRole = document.getElementById('job-role').value;

  // Make an API call or query the database to fetch candidates based on location and job role

  // Example: Hard-coded candidates for demonstration
  const candidates = [
    { name: 'Candidate 1', location: 'New York', jobRole: 'Software Engineer' },
    { name: 'Candidate 2', location: 'San Francisco', jobRole: 'Front-end Developer' },
    { name: 'Candidate 3', location: 'London', jobRole: 'Product Manager' },
    { name: 'Candidate 4', location: 'New York', jobRole: 'Software Engineer' },
    { name: 'Candidate 5', location: 'San Francisco', jobRole: 'Back-end Developer' }
  ];

  // Filter candidates based on location and job role
  const filteredCandidates = candidates.filter(candidate =>
    candidate.location.toLowerCase() === location.toLowerCase() &&
    candidate.jobRole.toLowerCase() === jobRole.toLowerCase()
  );

  // Clear previous candidates
  candidatesList.innerHTML = '';

  // Display filtered candidates
  if (filteredCandidates.length > 0) {
    filteredCandidates.forEach(candidate => {
      const li = document.createElement('li');
      li.textContent = `Name: ${candidate.name}, Location: ${candidate.location}, Job Role: ${candidate.jobRole}`;
      candidatesList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'No candidates found.';
    candidatesList.appendChild(li);
  }
});
