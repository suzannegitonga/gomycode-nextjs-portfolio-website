# My Portfolio

A personal portfolio website built with Next.js to showcase projects, skills, and contact information. This app is designed as a simple, clean portfolio experience with static pages, navigation, and a server-rendered home page.

## Project Overview

This project includes:

- A custom `Navbar` component for site navigation.
- A Home page with server-side rendering (`getServerSideProps`) for dynamically rendered content.
- An About page describing the developer.
- A Projects page listing featured work.
- A Contact page for reaching out.

## Key Features

- Built with Next.js and React.
- Uses `pages` directory routing for React pages and API routes.
- Includes a reusable navigation bar component in `components/Navbar.js`.
- Uses CSS modules for scoped component styling.
- Supports server-side rendering on the home page.
- Ready for deployment on Vercel or any Node.js hosting platform.

## Folder Structure

- `pages/`
  - `index.js` — Home page with SSR and profile image display.
  - `about.js` — About page describing the developer.
  - `projects.js` — Projects page listing featured work.
  - `contact.js` — Contact page for communication details.
  - `api/hello.js` — Example API route.
- `components/`
  - `Navbar.js` — Main site navigation component.
- `public/`
  - Static assets such as images.
- `styles/`
  - `globals.css` — Global styles.
  - `Home.module.css` — Home page styles.
  - `Navbar.module.css` — Navbar styles.

## Getting Started

### Requirements

- Node.js 18 or later
- npm (or `yarn` / `pnpm`)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the portfolio.

## Build and Production

To build the project for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Notes

- The home page expects a profile image at `public/profile.jpg`. Add this file if you want the profile photo to appear.
- The project uses Next.js `16.2.9`, React `19.2.4`, and ESLint for code quality.

## Dependencies

- `next` — framework for server-rendered React applications.
- `react` — JavaScript UI library.
- `react-dom` — React DOM renderer.

## Dev Dependencies

- `eslint` — linting utility.
- `eslint-config-next` — Next.js ESLint rules.

## Deployment

This portfolio is deployable on Vercel with zero-configuration. You can also deploy to other Node.js hosting platforms that support Next.js.

1. Push the repo to GitHub.
2. Connect the repo to Vercel.
3. Deploy from the Vercel dashboard.

## License

This project is open source and can be adapted freely for personal portfolio use.
