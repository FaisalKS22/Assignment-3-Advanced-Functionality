# Technical Documentation

## Architecture Overview

This portfolio is a single-page application (SPA) built with **React 19** and **Vite 8**. It uses a component-based architecture with CSS custom properties for theming.

### Tech Stack
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| CSS Custom Properties | Theming (dark/light mode) |
| GitHub API | Dynamic repository listing |
| Useless Facts API | Fun fact feature |
| localStorage | State persistence |

## Project Structure

```
src/
├── App.jsx              # Root component, theme & visitor state
├── main.jsx             # React entry point
├── index.css            # All styles with CSS custom properties
├── assets/              # Images and static assets
└── components/
    ├── Navbar.jsx       # Navigation with mobile menu & theme toggle
    ├── Hero.jsx         # Hero section with greeting, timer, visitor name
    ├── Projects.jsx     # Project cards with filter, search, and sort
    ├── GitHubRepos.jsx  # GitHub API integration
    ├── Skills.jsx       # Skills badge grid
    ├── FunFact.jsx      # Random fact from external API
    ├── Contact.jsx      # Contact form with validation
    ├── Footer.jsx       # Footer with social links
    └── ScrollToTop.jsx  # Scroll-to-top button
```

## Key Features

### 1. API Integration

#### GitHub Repos API
- **Endpoint**: `https://api.github.com/users/Faisal-M2/repos`
- **Data Displayed**: Repository name, description, language, stars, forks, last updated
- **Error Handling**: Loading spinner, error message with retry option, empty state
- **Language Colors**: Dynamic color dots mapped to programming languages

#### Fun Facts API
- **Endpoint**: `https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`
- **Features**: Random fact display, refresh button, loading and error states
- **Animation**: Fade-in animation on new facts using React key-based re-renders

### 2. Complex Logic

#### Project Filtering & Sorting
- **Search**: Real-time text search across project titles, descriptions, and tags
- **Tag Filter**: Filter by technology (All, Next.js, Flutter, React, Python)
- **Level Filter**: Filter by difficulty (All, Beginner, Advanced)
- **Sort Options**: Newest First, Oldest First, Name A-Z, Name Z-A
- **Combination**: All filters and sort work together using `useMemo` for performance

#### Contact Form Validation
- **Name**: Minimum 2 characters required
- **Email**: Regex pattern validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- **Message**: Minimum 10 characters required
- **Visual Feedback**: Error borders, shake animation, toast notifications
- **Flow**: Validates all fields on submit, shows specific error messages, clears on success

#### Visitor Timer
- Counts seconds since page load using `setInterval`
- Displays formatted time (e.g., "2m 35s") in the hero stats bar
- Updates every second in real-time

### 3. State Management

| State | Storage | Description |
|---|---|---|
| Theme (dark/light) | localStorage | Persists across sessions via `portfolio-theme` key |
| Visitor Name | localStorage | Persists via `portfolio-visitor` key, shown in greeting |
| Active Filter | React state | Current tag and level filter selections |
| Sort Order | React state | Current sort preference |
| Search Query | React state | Current search input value |
| Mobile Menu | React state | Open/closed state of hamburger menu |
| Active Section | React state | Currently visible section for nav highlighting |

### 4. Performance Optimizations

- **Lazy Loading**: Project images use `loading="lazy"` attribute
- **useMemo**: Filtered/sorted project list is memoized to avoid unnecessary recalculations
- **useCallback**: Theme toggle and visitor name handlers are memoized
- **CSS Transitions**: Hardware-accelerated transforms and opacity for smooth animations
- **Intersection Observer**: Efficient scroll-based animations without scroll event listeners
- **Vite Build**: Tree-shaking, code splitting, and asset optimization in production

### 5. Responsive Design

Three breakpoint tiers:
- **Desktop** (>1024px): Full two-column hero, multi-column grids
- **Tablet** (768px-1024px): Adjusted spacing and image sizes
- **Mobile** (<768px): Single column, hamburger menu, stacked layout

### 6. Accessibility

- Semantic HTML elements (`header`, `nav`, `section`, `footer`, `article`)
- ARIA labels on interactive elements
- `aria-expanded` on mobile menu toggle
- `aria-live="polite"` on toast notifications
- Keyboard-navigable form and buttons

## Build & Deployment

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

The production build outputs to `dist/` and is deployed via GitHub Pages using a GitHub Actions workflow (`.github/workflows/static.yml`).
