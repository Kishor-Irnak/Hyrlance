<div align="center">
  <h1>Hyrlance</h1>
  <p><strong>Coming soon landing page</strong> for the Hyrlance client & freelancer platform.</p>
</div>

## Overview

Hyrlance is a modern, responsive landing page that collects waitlist signups and highlights the platform’s value proposition: curated talent, zero fees for beta, and smart matching.

## What’s included

- **Hero section**: “Work together, beautifully.”
- **Waitlist form**: email capture + basic validation + success/error states
- **Live waitlist counter**: increments on successful signup and shows recent user initials
- **Navbar**: brand + social/contact links

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (dev server, build, preview)
- **Lucide React** (icons)

## Run locally

**Prerequisites:** Node.js (LTS recommended)

```bash
npm install
npm run dev
```

Vite will print the local URL in the terminal (typically `http://localhost:3000/`).

## Build & preview

```bash
npm run build
npm run preview
```

## Waitlist form (email delivery)

The waitlist form submits to **FormSubmit** using an email endpoint configured in `components/WaitlistForm.tsx`.

- If you want signups to go to a different inbox, update the email address in that file.
