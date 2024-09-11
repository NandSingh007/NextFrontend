# Next.js Project with Headless CMS and Dynamic Route
This project is a Next.js application built with the App Router, integrated with a headless CMS, featuring responsive design, theme toggle (light/dark mode), and performance optimization. Basic unit and e2e tests have been implemented as well.

## Features
Next.js App Router:

Fully responsive across different screen sizes, ensuring optimal user experience on mobile, tablet, and desktop.
Performance Optimization:

Utilizes Next.js Image optimization for faster loading of images.
Font optimization for better performance and reduced load times.
Dynamic Routes:

Includes dynamic routing to handle pages with dynamic content.
Theme Toggle:

Implements light and dark mode toggle to switch between different UI themes.
Testing:

Basic unit tests using Jest and e2e tests using Cypress.

## Technologies Used
Next.js: React framework with built-in performance optimizations.
Swell/Contentful: Headless CMS for managing dynamic content.
Tailwind CSS: For styling and responsive design.
Cypress: For end-to-end testing.
Vercel: Deployment platform.

/app
  /dynamic
    [id]/page.js          # Dynamic route page
  /layout.js              # Main layout
  /page.js                # Home page

/Client
  Header.js               # Header component
  Footer.js               # Footer component
  ThemeToggle.js          # Theme toggle button

/public
  /images                 # Images used in the project

/styles
  globals.css             # Global styles

/tests
  /unit                   # Unit tests
  /e2e                    # End-to-end tests

.env.local                # CMS API credentials

