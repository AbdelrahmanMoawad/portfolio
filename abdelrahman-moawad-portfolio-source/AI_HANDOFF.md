# AI Handoff — Abdelrahman Moawad Portfolio

## Project Purpose

This is the editable React + TypeScript source for Abdelrahman Moawad's single-page Game Developer portfolio. The professional focus is game development, especially Unity and gameplay programming. Artificial Intelligence appears only as the university specialization.

## Preserve the Existing Design

The visual direction is **premium esports + game developer + championship UI**, using an original competitive-game HUD language. It may take broad inspiration from premium esports presentation, but must not copy VALORANT/Riot logos, characters, proprietary UI, exact layouts, or typography. Preserve the existing design unless the user specifically asks for a redesign.

### Design system read from `src/index.css`

- Dark theme is the default: background `#101113`; surfaces `#17191c` and `#1c1e21`; borders `#303236` and `#47494d`; text `#f2f1ee`; muted text `#92949a`; esports red `#ed3838` with dark red `#a9272b`.
- Light theme overrides the background with `#f2f0ec`, surfaces with `#e7e4de` and `#dedbd5`, text with `#1a1b1e`, muted text with `#62646a`, and accent red with `#cf3035`.
- Shared layout tokens: max content width `1440px`; gutter `clamp(22px, 5.2vw, 84px)`; section spacing `clamp(72px, 10vw, 144px)`; corner radius `2px`.
- Typography: Barlow Condensed for display headings (Impact fallback), DM Sans for Latin interface/body text, and Noto Sans Arabic with DM Sans fallback for RTL.
- The stylesheet imports those font families from Google Fonts; the declared system fallbacks remain available if the font request is unavailable.
- Components use compact uppercase labels, thin borders, angular corners, small red status/target accents, restrained gradients, and subtle shadows. Avoid introducing large gradients, rounded-card UI, RGB effects, or unrelated visual systems.
- Buttons share a sharp rectangular treatment. Cards share thin borders and controlled accent/hover behavior.
- Motion is implemented with CSS keyframes/transitions and `IntersectionObserver` reveals. Reduced-motion preferences disable or shorten these effects. Do not add animation without a clear purpose.

## Technology and Commands

- React 19, TypeScript, Vite, Tailwind CSS v4 Vite plugin, and pnpm lockfile.
- CSS is primarily in `src/index.css`; Tailwind is integrated through `@tailwindcss/vite`.
- `framer-motion` and `lucide-react` appear in `package.json`/lockfile but are not currently imported in the source. Do not claim they power current animations or icons.
- Install: `pnpm install --frozen-lockfile`
- Develop: `pnpm dev`
- Build: `pnpm build` (TypeScript check followed by Vite production build)
- Preview: `pnpm preview`

## Source Organization

- `src/App.tsx` owns the sticky navigation, hero and player card, page composition, active-section tracking, mobile drawer, Escape-to-close behavior, and section reveal observer.
- `src/components/` holds About, Projects/ProjectCard, Skills, Services, Education/Training, Achievement, Contact, Footer, and localization provider/components.
- `src/data/profile.ts` stores about, education, training, achievement, and contact facts.
- `src/data/projects.ts` stores exactly two project records.
- `src/data/capabilities.ts` stores the confirmed skill groups and services.
- `src/data/translations.ts` stores the English-to-Arabic string dictionary.
- `src/index.css` contains design tokens and all section, theme, responsive, RTL, focus, and motion styling.
- `public/assets/profile/profile.png` is the supplied portrait; `public/assets/cv/Abdelrahman_Moawad_CV_Final.pdf` is the supplied CV. Project artwork is inline SVG in `src/components/ProjectCard.tsx`.

## Theme, Localization, and RTL

- `LanguageProvider` in `src/components/Localization.tsx` stores language (`portfolio-language`) and theme (`portfolio-theme`) in localStorage. Defaults are English and dark mode.
- Theme values are exposed through React context and applied to `document.documentElement.dataset.theme`; CSS variables and `[data-theme="light"]` selectors provide the light theme. The provider also updates the browser `color-scheme` and theme-color metadata.
- The `Localized` component recursively translates text and selected accessibility attributes from the Arabic dictionary when Arabic is selected.
- Language selection updates the document `lang` and sets `dir="rtl"` for Arabic or `dir="ltr"` for English. RTL-specific alignment and positioning are in the `html[dir="rtl"]` selectors in `src/index.css`.
- When changing copy, update both the English source and Arabic dictionary entry. Keep product names, programming languages, and technical terms readable and consistent.

## Responsive Behavior

- Main navigation collapses into a keyboard-operable mobile drawer at `760px`; Escape closes it and selecting a section closes the drawer.
- Hero changes from two columns to a stacked layout at `760px`.
- Project cards stack at `560px`; service cards use one column at `380px`; contact cards use one column at `360px`.
- Additional adjustments exist at `1050px` and `420px`. RTL offsets have matching mobile adjustments.
- Existing responsive breakpoints and component sizing are in `src/index.css`. Verify English/Arabic at desktop and phone widths after any layout-affecting change.

## Current Confirmed Content — Preserve Accuracy

- Name: Abdelrahman Moawad. Role: Game Developer. Country: Egypt.
- Focus: Unity, gameplay programming, C#, C++, and interactive game development.
- Education: Faculty of Computers and Artificial Intelligence, Benha University; Artificial Intelligence specialization; 4th year; expected graduation 2027.
- Training: Digital Egypt Pioneers Initiative (DEPI), Game Development track, in progress. It is training, not employment.
- Experience is described as around one year. AAA studio work is a long-term career direction, not current employment.
- **Kitchen Chaos** is a learning project built while following Code Monkey's Unity tutorial/curriculum. Do not claim original concept/design ownership.
- **The Final Minute** is a psychological horror/survival concept and must remain **IN DEVELOPMENT**. Do not claim its systems are completed.
- The only achievement entry is registered participation in Egypt Game Jam at ITI Smart Village, 2026. Do not claim a rank, win, placement, award, or certificate.
- Preserve only the confirmed skill and service lists in `src/data/capabilities.ts`. Do not add proficiency ratings.
- Do not invent employers, clients, additional projects, social accounts, statistics, completed features, awards, or other unsupported facts. Do not position the portfolio as AI engineering.

## Deployment

Build with `pnpm build` and publish the contents of `dist/` to a static host. The current asset URLs assume a domain-root deployment. If deploying under a URL subpath, adjust Vite's `base` and the root-absolute asset paths used for the portrait and CV. The project currently has no favicon configured.
