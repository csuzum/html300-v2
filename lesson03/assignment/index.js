const employees = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  },
];

const container = document.querySelector('#main-container')

employees.forEach(function(el) {
  let list = document.createElement('article')
  list.setAttribute('class', 'employee-card')
  list.innerHTML = ` 
    <div class='name-container'>
      <img class='circle-img' src='./img/headshot.jpg' alt='face of beagle wearing a black bow tie'>
      <h1>${el.name}</h1>
      <h2>${el.jobTitle}</h2>
    </div>
    <div class='profile-detail'>
      <ul>
        <li><span>Company: </span>${el.company}</li>
        <li><span>Experience: </span>${el.experience}</li>
        <li><span>School: </span>${el.school}</li>
        <li><span>Major: </span>${el.major}</li>
        <li><span>Email: </span>${el.email}</li>
        <li><span>LinkedIn URL: </span>${el.linkedInUrl}</li>
        <li><span>Code Languages: </span>${el.codeLanguages.join(', ')}</li>
    </div>
  `
  container.append(list)
})
