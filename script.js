// Sample data (could be fetched from a backend in a real application)
const students = [
    { name: "Alice", degree: "B.Tech CSE", skills: "JavaScript, HTML, CSS" },
    { name: "Bob", degree: "B.Tech IT", skills: "Python, SQL" }
];

const companies = [
    { name: "Tech Corp", industry: "Software", location: "New York" },
    { name: "Innovate LLC", industry: "Marketing", location: "San Francisco" }
];

const jobs = [
    { title: "Software Developer", company: "Tech Corp", location: "New York" },
    { title: "Data Analyst", company: "Innovate LLC", location: "San Francisco" }
];

// Load students
const studentSection = document.getElementById('students');
students.forEach(student => {
    const studentDiv = document.createElement('div');
    studentDiv.innerHTML = `<h3>${student.name}</h3><p>Degree: ${student.degree}</p><p>Skills: ${student.skills}</p>`;
    studentSection.appendChild(studentDiv);
});

// Load companies
const companySection = document.getElementById('companies');
companies.forEach(company => {
    const companyDiv = document.createElement('div');
    companyDiv.innerHTML = `<h3>${company.name}</h3><p>Industry: ${company.industry}</p><p>Location: ${company.location}</p>`;
    companySection.appendChild(companyDiv);
});

// Load jobs
const jobSection = document.getElementById('jobs');
jobs.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.innerHTML = `<h3>${job.title}</h3><p>Company: ${job.company}</p><p>Location: ${job.location}</p>`;
    jobSection.appendChild(jobDiv);
});
