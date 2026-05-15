# NovaCare — Premium Booking SaaS Demo

Modern booking and appointment management platform built with Vue 3, Vite and TailwindCSS v4.

Designed as a premium SaaS demo focused on modern UX, glassmorphism UI, animations and scalable architecture.

---

# Preview

NovaCare simulates a modern appointment booking platform for:

- Clinics
- Hair salons
- Coaches
- Consultants
- Wellness businesses
- Service-based companies

The project includes:

- Premium landing page
- Booking flow
- Dashboard UI
- Analytics preview
- Dark / Light mode
- Responsive design
- Microinteractions
- Modern SaaS architecture

---

# Tech Stack

- Vue 3
- Vite
- Vue Router
- TailwindCSS v4
- Lucide Icons
- JavaScript

---

# Features

## Landing Page

- Hero section
- Services section
- Pricing section
- Testimonials section
- FAQ section
- CTA section
- Premium footer

## Booking System

- Service selection
- Date selection
- Time slot selection
- Booking summary
- Success modal
- Toast notifications

## Dashboard

- Analytics cards
- Animated counters
- Upcoming appointments
- Dashboard layout

## UX / UI

- Glassmorphism design
- Spotlight hover effect
- Reveal animations
- Floating elements
- Pulse glow effects
- Loading screen
- Route transitions
- Responsive mobile experience

## System Features

- Dark / Light mode
- Theme persistence with localStorage
- Lazy loaded routes
- SEO-ready structure
- Reusable UI components
- Modular feature architecture

---

# Project Structure

```bash
src/
├── components/
│   ├── layout/
│   └── ui/
│
├── composables/
│
├── directives/
│
├── features/
│   ├── booking/
│   ├── calendar/
│   ├── dashboard/
│   ├── faq/
│   ├── landing/
│   ├── modals/
│   ├── notifications/
│   ├── pricing/
│   └── system/
│
├── layouts/
├── router/
├── views/
│
├── App.vue
├── main.js
└── style.css
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/booking-system-demo.git
```

---

## Navigate into the project

```bash
cd booking-system-demo
```

---

## Install dependencies

```bash
npm install
```

---

## Start development server

```bash
npm run dev
```

---

# Production Build

```bash
npm run build
```

---

# Preview Production Build

```bash
npm run preview
```

---

# GitHub Pages Deployment

## Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

## Deploy

```bash
npm run deploy
```

---

# IMPORTANT — Vue Router and GitHub Pages

This project uses:

```js
createWebHistory()
```

GitHub Pages does not support SPA history fallback natively.

Because of that, direct navigation to routes like:

```text
/booking
/dashboard
```

may return a 404 after refresh.

---

# Recommended Solution

For GitHub Pages deployments, it is recommended to switch to:

```js
createWebHashHistory()
```

inside:

```bash
src/router/index.js
```

Example:

```js
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
```

This avoids routing issues on GitHub Pages.

---

# Alternative

If you want to keep:

```js
createWebHistory()
```

then deploy using platforms with SPA fallback support such as:

- Vercel
- Netlify
- Cloudflare Pages

---

# Design Goals

NovaCare was built to simulate a modern premium SaaS experience with:

- clean architecture
- reusable components
- scalable structure
- modern animations
- premium UI/UX
- responsive layouts

The project is intended for:

- portfolio presentation
- agency showcases
- SaaS demos
- client acquisition
- reusable project starter

---

# Author

Black Eagle Tech

---

# License

This project is for educational and portfolio purposes.