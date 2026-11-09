# Project Report – Personal Portfolio Website

**Course:** Internet Programming I (INSY3061)  **Student:** Haylegebreal Mandefro (ID: ________)
**GitHub:** https://github.com/hayle-man

## 1. Introduction
This project is a personal portfolio website that presents my background, skills, projects, education, achievements and contact details to employers, instructors and collaborators.

## 2. Objectives
- Apply semantic HTML5, CSS3 and JavaScript in one working website.
- Build a responsive, accessible interface for desktop and mobile.
- Practise testing, validation and Git version control.

## 3. Projects Presented
1. Library Management System (Java, Object-Oriented Programming course).
2. ER diagram and relational schema for a university course registration system (Database course).

## 3.1 Site Structure
Single page with a sticky navigation linking: Home, About, Skills, Projects, Education, Achievements, Blog and Contact. A footer and a project-details modal complete the page.

## 4. Implementation Details
- **HTML:** semantic landmarks, labelled form controls, images with alt text.
- **CSS:** CSS variables drive the light/dark themes; Grid and Flexbox give the layouts; media queries at 860px and 700px adapt the design to tablets and phones.
- **JavaScript:** (1) time-based greeting, (2) theme switch with localStorage, (3) mobile menu, (4) project filter, (5) modal, (6) contact form validation with inline error messages, (7) animated skill bars using IntersectionObserver.

## 5. Testing and Results
| Test | Expected | Result |
|---|---|---|
| Navigation links | Scroll to the correct section | Pass |
| Mobile menu | Opens/closes under 860px | Pass |
| Theme toggle | Switches and persists after reload | Pass |
| Project filter | Shows only the chosen category | Pass |
| Modal | Opens, closes with X, overlay click and Esc | Pass |
| Form – empty/invalid input | Shows error messages, blocks submit | Pass |
| Form – valid input | Shows success message | Pass |
| Browsers | Chrome, Firefox | Pass |

*(Add screenshots of each section on desktop and mobile here.)*

## 6. Challenges and Solutions
- **Responsive menu:** solved with a max-height transition and a toggle button.
- **Form validation:** combined native HTML attributes with custom JavaScript messages.
- **Theme persistence:** stored the choice in localStorage with a try/catch fallback.

## 7. Conclusion and Future Improvements
The site meets the assignment requirements. Future work: a real backend for the contact form, a CMS-driven blog and multilingual (Amharic/English) support.

## 8. References
- MDN Web Docs – https://developer.mozilla.org
- W3C Markup Validation Service – https://validator.w3.org
