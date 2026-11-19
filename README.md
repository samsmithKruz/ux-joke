# Who Designed This Thing?!

**A comedy-driven UX experience by Code with Samuel Benny.**

What happens when a simple account registration process becomes an unnecessarily complicated journey?

Welcome to **Verdant AI** — a fictional SaaS application where ordinary tasks become extraordinary user experiences... for all the wrong reasons.

This project is part of a comedic tech content series exploring bad user experience (UX), frustrating product decisions, and the everyday madness users encounter in poorly designed applications.

## About the Project

**Who Designed This Thing?!** is an interactive frontend experience created for Episode 01 of the series.

The episode follows a user attempting to create an account, generate a business plan, change a password, and eventually delete their account.

Sounds simple, right?

Not on Verdant AI.

From ridiculous password requirements to a business plan generator that fails successfully, and checkout pages that demand payment for basic account management, every interaction is designed to highlight how bad UX can turn simple tasks into frustrating experiences.

## Episode 01: Creating an Account

The experience follows this journey:

1. **Registration** — Try creating an account while navigating increasingly ridiculous password validation rules.
2. **Email Verification** — Successfully create an account, only to be told to check your inbox.
3. **Business Plan Generator** — Attempt to generate a business plan, only to receive the response: "Your request failed successfully!"
4. **Account Settings** — Navigate the account settings and discover the password management options.
5. **Password Change** — Discover that changing your password requires a payment of **$328.99**.
6. **Account Deletion** — Decide to leave Verdant AI, only to discover that deleting your account costs **$1,499.99**.
7. **The Finale** — Ask the question every frustrated user eventually asks: "Who designed this thing?!"

## Features

- Interactive account registration experience.
- Absurd password validation scenarios.
- Simulated email verification screen.
- AI business plan generator with deliberately unexpected results.
- Account profile and security settings.
- Ridiculous password-change checkout flow.
- Account deletion checkout flow.
- Responsive layouts for desktop and mobile.
- Animated loading states and interaction feedback.

## Tech Stack

- **React** — UI development.
- **TypeScript** — Type safety.
- **Vite** — Development server and build tooling.
- **Tailwind CSS v4** — Styling.
- **shadcn/ui** — UI components.
- **Lucide React** — Icons.
- **React Router** — Client-side routing.

## Getting Started

### Prerequisites

- Node.js (22 or later recommended).
- npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/samsmithKruz/ux-joke.git
```

Navigate into the project:

```bash
cd ux-joke
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal, usually:

```text
http://localhost:5173
```

### Production Build

To generate a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Redirects to registration |
| `/register` | Account registration and email verification |
| `/app` | AI business plan generator |
| `/settings/security` | Profile and security settings |
| `/checkout` | Password-change checkout |
| `/checkout-delete` | Account-deletion checkout |
| `/end` | Episode finale |

## Important Notes

This is a **frontend-only demonstration project**.

- No real user accounts are created.
- Email verification is simulated.
- The business plan generator does not connect to an AI service.
- Checkout pages do not process payments.
- No actual account deletion or password modification takes place.
- All interactions are intended for demonstration and entertainment.

**Please do not enter real payment card details or sensitive personal information.**

## The Idea Behind the Series

Good UX should make complex things feel simple.

Users shouldn't have to fight an interface to accomplish ordinary tasks. Every unnecessary step, confusing message, inconsistent interaction, and poorly considered design decision adds friction to the experience.

This series uses humour to explore those problems and encourage better conversations about product design, usability, and software development.

Because sometimes, the best UX lesson starts with one simple question:

**Who designed this thing?!**

---

## Creator

**Code with Samuel Benny**

Where technology meets everyday madness.

- GitHub: [@samsmithKruz](https://github.com/samsmithKruz)
- LinkedIn: [Samuel Benny](https://www.linkedin.com/in/smithkruz/)

---

*Built for laughs. Inspired by real UX frustrations. No actual users were harmed by Verdant AI.*