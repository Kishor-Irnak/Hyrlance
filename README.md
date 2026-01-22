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

## Waitlist flow

- Submissions are captured via a simple email form with validation and clear success/error states.
- On successful signup, the page updates instantly (counter increments and a new “recent user” initial appears).

## Notes

- The waitlist form submits via **FormSubmit** (endpoint configured in `components/WaitlistForm.tsx`).
