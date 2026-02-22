# Architecture: MIJ Website (Premium Redesign v1.1.0)

## Overview
A high-end, production-ready React application built with Vite, Tailwind CSS v4, and Framer Motion. The architecture prioritizes visual excellence, performance, and internationalization.

## Core Technology Stack
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS v4 (Modern Engine)
- **Logic & State:**
  - **Global State:** Zustand (ZStore) for UI & Theme preferences.
  - **Data Fetching:** TanStack Query v5 for API synchronization.
  - **Routing:** React Router v7 with dynamic segment loading.
- **Animations:** Framer Motion (motion/react) for staggered entries and micro-interactions.
- **Validation:** Zod for type-safe forms and API responses.

## Key Architectural Systems

### 1. Theme Engine (Midnight Velvet / Ivory Paper)
- **ThemeProvider:** A high-level context that manages theme state without page flash.
- **ZStore (uiStore):** Persists user theme preferences to localStorage.
- **CSS Variable System:** Centrally defined tokens in `globals.css` that adapt dynamically.

### 2. Localization Infrastructure
- **LanguageContext:** Handles global locale switching between Japanese, English, and Bengali.
- **Translation Engine:** Modular `.ts` mapping files for high-precision business translations.

### 3. Motion System
- **Staggered Entry:** Common variants used across all pages for consistent "premium" reveal.
- **Magnetic Components:** Native motion-driven micro-interactions for high-conversion buttons.

## Directory Structure
- `src/components/pages/`: Core UI entry points for all 12+ pages.
- `src/components/ui/`: Atomic components (buttons, cards, badges).
- `src/components/animations/`: Reusable motion wrappers.
- `src/contexts/`: Shared global state (Theme, Language).
- `src/styles/`: Global CSS tokens and Tailwind v4 configuration.

## Deployment & CI/CD
- **Platform:** GitHub Pages (Automated Deployment).
- **Workflow:** CI/CD pipeline for health checks, type validation, and production builds.

---
*Last Updated: February 2026*
