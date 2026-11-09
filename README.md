# Personal Portfolio Website

Individual assignment for **Internet Programming I (INSY3061)** – Department of Information System, College of Informatics, Kombolcha Institute of Technology, Wollo University.

## Description
A responsive single-page personal website presenting my background, skills, projects, education, achievements, blog reflections and contact information.

## Technologies Used
- **HTML5** – semantic structure (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- **CSS3** – custom properties, Flexbox, Grid, media queries, dark/light theme
- **JavaScript (vanilla)** – no external libraries or frameworks
- **Git & GitHub** – version control

## Features
- Sections: Home, About, Skills, Projects, Education, Achievements, Blog, Contact
- Sticky navigation with active-link highlighting and responsive mobile menu
- Dark / light mode saved with `localStorage`
- Dynamic greeting based on time of day
- Project filtering and project details modal
- Animated skill bars and counters
- Contact form with HTML validation (`required`, `type`, `pattern`, `minlength`) plus JavaScript validation and error messages
- Downloadable CV
- Accessible: labels, alt text, logical headings, keyboard-friendly, ARIA attributes

## Folder Structure
```
portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── images/   (profile.jpg + project images)
├── assets/CV.txt
└── README.md
```

## How to Run
1. Download or clone the repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge). No server or installation is required.

Optional: use VS Code "Live Server" for auto-reload.

## Customisation
Replace `assets/CV.txt` with your real CV (e.g. `CV.pdf`) and update the link in `index.html`. Add GitHub links to the project cards once your projects are uploaded.

## Testing
Tested in Chrome and Firefox; responsive layouts checked with DevTools (F12) at 360px, 768px and 1280px widths. HTML validated with the W3C Markup Validator.

## Author
Haylegebreal Mandefro – Wollo University, Kombolcha, Ethiopia
GitHub: https://github.com/hayle-man

## Acknowledgements
The profile photo is the author's own; project images are original SVG drawings. No third-party libraries are used.
