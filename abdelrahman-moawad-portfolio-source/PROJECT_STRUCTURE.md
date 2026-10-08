# Project Structure

```text
abdelrahman-moawad-portfolio/
├── public/
│   └── assets/
│       ├── cv/
│       │   └── Abdelrahman_Moawad_CV_Final.pdf
│       └── profile/
│           └── profile.png
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievement.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Localization.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   ├── capabilities.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── translations.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── README.md
├── PROJECT_STRUCTURE.md
└── AI_HANDOFF.md
```

The export excludes `node_modules/`, generated `dist/`, temporary QA files, and previous export archives. Recreate dependencies with `pnpm install --frozen-lockfile` and build output with `pnpm build`.
