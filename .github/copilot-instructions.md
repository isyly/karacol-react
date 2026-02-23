# Copilot Instructions for KaracolReact

## Project Overview
- **Type**: React single-page application (SPA) using Vite
- **Purpose**: Vitrine site for Karacol, featuring reusable components, i18n, and a Leaflet map
- **Key Directories**:
  - `src/components/`: All main UI components (Hero, Header, Footer, Map, etc.)
  - `src/pages/`: Page-level components (Contact, Products)
  - `src/locales/`: i18n translation files (en, fr)
  - `public/`: Static assets

## Architecture & Patterns
- **Component Structure**: Flat, with each UI section as a separate file in `components/`.
- **i18n**: Uses `react-i18next` with translation files in `src/locales/{lang}/translation.json`.
- **Map Integration**: Uses `react-leaflet` and `leaflet` for interactive maps (see `Map.jsx`).
- **Styling**: Global styles in `src/App.css`. Component classes follow BEM-like naming (e.g., `.hero-overlay`).
- **Routing**: No explicit router; navigation is likely handled via anchor links and component visibility.

## Developer Workflows
- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Deploy to GitHub Pages**: Push to `main` branch; workflow in `.github/workflows/deploy.yml` auto-builds and deploys to `gh-pages` using `peaceiris/actions-gh-pages`.
  - Ensure `vite.config.js` has `base: '/karacol-react/'` and `package.json` has the correct `homepage`.
- **Linting**: `npm run lint` (uses ESLint)

## Conventions & Gotchas
- **Vite base path**: Must match the repo name for GitHub Pages (`/karacol-react/`).
- **Translations**: Add new keys to both `en/translation.json` and `fr/translation.json`.
- **Map assets**: Leaflet CSS/JS must be loaded for maps to render correctly.
- **No custom routing**: All navigation is handled in components; no React Router.
- **Overlay stacking**: Use `z-index` and `position` for overlays (see `.hero-overlay` and `.hero-bg-video`).

## External Integrations
- **Leaflet**: For maps (see `Map.jsx`)
- **react-i18next**: For translations
- **peaceiris/actions-gh-pages**: For deployment (see `.github/workflows/deploy.yml`)

## Example: Adding a New Section
1. Create a new component in `src/components/`.
2. Import and use it in `App.jsx` or the relevant page.
3. Add styles to `App.css` if needed.
4. Add translation keys if text is user-facing.

---

For more details, see `README.md` and `.github/workflows/deploy.yml`.
