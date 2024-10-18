# Personal Portfolio

This is the source code for my personal portfolio application, developed with React, TypeScript, and Vite.

## Description

This portfolio application is a Single Page Application (SPA) that showcases information about me, my skills, projects, and allows for the download of my CV. It is designed with a modern approach using React and styled with Styled Components.

## Features

- **About Me**: Section that displays personal information.
- **Skills**: List of technical and soft skills.
- **Projects**: Gallery of completed projects.
- **Download CV**: Option to download my CV in PDF format.
- **Send Email**: Contact form to send me an email directly from the website.
- **View Location**: Interactive map showing my location.

## Installation

1. Clone the repository:

```
  git clone https://github.com/Balexo/porfolio
  cd porfolio
```

2. Install the dependencies:

```
npm install
```

3. Run the application in development mode:

```
npm run dev
```

4. Open your browser and navigate to:
   `http://localhost:5173`

## Available Scripts

- **npm run dev**: Runs the app in the development mode. Open http://localhost:5173 to view it in the browser.

- **npm run build**: Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance.

- **npm run lint**: Runs the linter to identify and fix problems in your code.

- **npm run preview**: Serves the build from the dist folder. This is useful for previewing your production build locally.

- **npm run test**: Runs the tests using Vitest.

- **npm run test:watch**: Runs the tests in watch mode, re-running tests when files change.

- **npm run test:coverage**: Generates a code coverage report using Istanbul.

## Dependencies

Here are the key dependencies used in this project:

### Main Dependencies:

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **Styled Components**: For writing CSS in JavaScript with scoped styles.
- **GSAP (Greensock Animation Platform)**: For creating high-performance animations.
- **Lodash**: Only used for throttling events, preventing functions from being called too frequently.
- **React Icons**: Collection of popular icons as React components.
- **React Leaflet**: Integration of Leaflet maps with React.

### Dev Dependencies:

- **Vite**: Next-generation front-end tool for building web applications.
- **ESLint**: Linter to identify and fix JavaScript/TypeScript code issues.
- **Vitest**: Fast unit testing framework for Vite.
- **Types for React, Styled Components, and other libraries**: TypeScript type definitions for better developer experience.
  You can see a full list of dependencies in the package.json file.

### Performance and Optimization

I used React.lazy() to implement lazy loading for components such as DownloadCV, Contact or Proyects improving the initial load time of the application by loading components only when they are needed.

Lighthouse Performance Results:

- Performance: 93
- Accessibility: 96
- Best Practices: 96
- SEO: 100

These scores reflect the efforts made to optimize the application's performance, accessibility, and overall quality.

## Deployment

This portfolio is deployed on an EC2 instance using Nginx as the web server. The domain is managed with Route53, and the DNS settings are configured through Hostalia.

### Deployment Steps (AWS EC2 + Nginx)

1. Set up an EC2 instance using Ubuntu.
2. Install Nginx to serve the application.
3. Domain and DNS configuration are managed via Route53 (AWS) and Hostalia for domain registration.
4. SSL: set up HTTPS based on Let's Encrypt with Certbot.

## License

This project is licensed under the terms of the MIT license. See the LICENSE file for more details.
