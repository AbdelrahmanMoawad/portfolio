# Abdelrahman Moawad Portfolio

## Project Overview

A single-page portfolio presenting Abdelrahman Moawad as a Game Developer. It uses an original premium esports/HUD visual direction and includes English and Arabic localization, RTL layout, dark and light themes, project cards, education, training, achievement, and contact information.

## Tech Stack

- React 19 and TypeScript
- Vite for development and production builds
- Tailwind CSS v4 Vite integration (the portfolio styling is primarily authored in `src/index.css`)
- CSS animations and the browser `IntersectionObserver` for motion and section reveals
- `framer-motion` and `lucide-react` are declared dependencies but are not currently imported by the source components

## Requirements

- Node.js
- pnpm compatible with the included v9 lockfile format

## Installation

```sh
pnpm install --frozen-lockfile
```

## Development

```sh
pnpm dev
```

Vite prints the local development URL when it starts.

## Production Build

```sh
pnpm build
```

The production files are written to `dist/`.

## Preview

```sh
pnpm preview
```

## Project Structure

- `src/App.tsx` — page composition, primary navigation, hero, player card, and reveal/navigation behavior
- `src/components/` — localized portfolio sections and shared presentation components
- `src/data/` — portfolio facts, projects, capabilities, and Arabic translations
- `src/index.css` — design tokens, component styling, responsive rules, themes, RTL adjustments, and motion
- `public/assets/profile/` — supplied profile portrait
- `public/assets/cv/` — supplied CV PDF
- `index.html` — page metadata and Vite entry point
- `vite.config.ts`, `tsconfig.json`, `pnpm-lock.yaml` — build and dependency configuration

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for the complete source tree and [AI_HANDOFF.md](AI_HANDOFF.md) for implementation and preservation guidance.

## Assets

- Profile image: `public/assets/profile/profile.png`
- CV: `public/assets/cv/Abdelrahman_Moawad_CV_Final.pdf`
- The two project illustrations are authored as inline SVGs in `src/components/ProjectCard.tsx`.
- No favicon file is currently configured.

## Deployment

Run `pnpm build`, then publish the contents of `dist/` to a static web host. The current Vite configuration assumes the site is served from the domain root; for a subpath deployment, configure Vite's `base` and update root-absolute asset links in `src/App.tsx` and `src/data/profile.ts` accordingly.
