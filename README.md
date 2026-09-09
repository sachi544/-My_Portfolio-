# Sachin MB | Portfolio

A personal portfolio website for Sachin M Bannur, built with React and customized from the developerFolio template. This project showcases my technical skills, profile summary, experience, and social presence in a modern dark-themed interface.

## Live Portfolio

- GitHub: https://github.com/sachi544
- LinkedIn: https://www.linkedin.com/in/sachin-m-bannur/
- Email: sachinmbsachinmb78@gmail.com

## About Me

I am Sachin M Bannur, a passionate Full Stack Software Developer with experience building web and mobile applications using JavaScript, React.js, Node.js, React Native, and other modern technologies. I enjoy creating interactive user interfaces, exploring AI and computer vision, and continuously improving my skills in cloud computing and software engineering.

## Features

- Modern and responsive developer portfolio layout
- Dark-themed design optimized for developer branding
- Hero section with profile introduction and social links
- Skills section with interactive technology cards
- Resume link section
- Contact section with direct communication options
- Animated UI elements and Lottie-based illustrations
- Easy-to-customize portfolio data via a single configuration file

## Tech Stack

- React
- JavaScript
- SCSS
- Lottie animations
- react-reveal
- Font Awesome icons

## Project Structure

```bash
developerFolio/
+-- public/
+-- src/
�   +-- assets/
�   +-- components/
�   +-- containers/
�   +-- contexts/
�   +-- hooks/
�   +-- App.js
�   +-- App.scss
�   +-- index.css
�   +-- index.js
�   +-- portfolio.js
�   +-- setupTests.js
+-- .env.example
+-- Dockerfile
+-- fetch.js
+-- package.json
+-- README.md
+-- LICENSE
+-- build/
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/your-username/developerFolio.git
cd developerFolio
npm install
```

### Run the project locally

```bash
npm start
```

The app will run at:

```bash
http://localhost:3000
```

## Customize the Portfolio

The portfolio content is managed in:

- src/portfolio.js

You can update:

- name and greeting text
- subtitle and bio
- social media URLs
- skills and technologies
- resume link
- contact details

Example:

```js
const greeting = {
  username: "Sachin M Bannur",
  title: "Hi all, I'm Sachin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer ??..."
  ),
  resumeLink: "https://drive.google.com/..."
};
```

## Building for Production

```bash
npm run build
```

This generates the optimized production files in the `build` folder, which can then be deployed to GitHub Pages, Netlify, Vercel, or any static hosting service.

## Deployment

This project can be deployed to:

- GitHub Pages
- Netlify
- Vercel

## Contact

Connect with me:

- GitHub: https://github.com/sachi544
- LinkedIn: https://www.linkedin.com/in/sachin-m-bannur/
- Email: sachinmbsachinmb78@gmail.com

## License

This project is licensed under the MIT License.

## Acknowledgement

This portfolio is based on the developerFolio template and customized for Sachin MB.
