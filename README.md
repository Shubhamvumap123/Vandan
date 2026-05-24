# Charanvandan Crowdfunding UI

A modern React + Vite landing page for a charitable crowdfunding platform built with Tailwind CSS and Lucide icons.

## Overview

This repository contains a responsive frontend for the Charanvandan nonprofit campaign site. It showcases a polished hero section, verified NGO features, campaign cards, impact statistics, contact form UI, and a global footer.

## Key Features

- Responsive navigation with mobile menu support
- Full-page hero section with CTA buttons
- About section highlighting verified NGOs and 80G tax benefits
- Campaign cards with progress bars and donation CTA
- Impact section with statistics and monthly giving benefits
- Contact section with address, phone, email, and message form UI
- Tailwind CSS styling with a warm orange branding palette

## Built With

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React icons
- ESLint for linting

## Getting Started

### Prerequisites

- Node.js 20+ or newer
- npm 10+ or yarn 1/3+

### Install

```bash
cd "E:\New folder\Vandan"
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
.
├─ public/
│  └─ assets/            # static images and asset files
├─ src/
│  ├─ assets/            # additional images used by components
│  ├─ components/        # reusable page sections
│  │  ├─ About.jsx
│  │  ├─ Campaigns.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Impact.jsx
│  │  └─ Navbar.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md
```

## Notes

- This repository is a static frontend UI only. The contact form and donation buttons are currently non-functional placeholders.
- Update the `public/assets` folder with real campaign images and branding assets as needed.

## License

This project is provided as-is for learning and prototyping.
