# Faisal Baeshen – Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience as an aspiring web developer. This is Assignment 3, building on Assignments 1 and 2 with advanced functionality, API integration, and state management.

## Live Demo

Deployed via GitHub Pages.

## Features

- **Dark/Light Theme** – Toggle with localStorage persistence
- **GitHub API Integration** – Dynamically displays my public repositories
- **Fun Facts API** – Fetches random facts from an external API
- **Project Filtering & Sorting** – Search, filter by tag/level, sort by date or name
- **Visitor Timer** – Live counter showing time spent on the site
- **Visitor Name** – Stores and displays visitor's name via localStorage
- **Contact Form** – Multi-step validation with error feedback and toast notifications
- **Responsive Design** – Works across desktop, tablet, and mobile
- **Scroll Animations** – Intersection Observer-based fade-in effects
- **Active Nav Highlighting** – Automatically highlights the current section

## Tech Stack

- React 19
- Vite 8
- CSS Custom Properties
- GitHub REST API
- Useless Facts API

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm

### Run Locally

```bash
# Clone the repository
git clone https://github.com/FaisalKS22/portoflio.git
cd portoflio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Root component
├── main.jsx             # Entry point
├── index.css            # Styles
├── assets/              # Images
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Projects.jsx
    ├── GitHubRepos.jsx
    ├── Skills.jsx
    ├── FunFact.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── ScrollToTop.jsx
docs/
├── ai-usage-report.md
└── technical-documentation.md
```

## AI Usage Summary

AI tools (Claude, GitHub Copilot) were used to assist with code generation, debugging, and documentation. All AI-generated code was reviewed, customized, and tested. Full details are in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Author

**Faisal Baeshen** – King Fahd University of Petroleum and Minerals  
- [GitHub](https://github.com/Faisal-M2)
- [LinkedIn](https://www.linkedin.com/in/faisal-baeshen/)
