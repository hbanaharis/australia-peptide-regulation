# Peptide regulation briefing site

Single-page React site for the Australia Peptide Regulation Tracker. It renders the briefing in `README.md`, `updates/2026-11-25.md`, and `sources/additional-sources-chronological.md`.

## Why Vite

The site uses [Vite](https://vite.dev/) with React, not Create React App. Vite is the current default for a new React single-page app: the dev server starts quickly, the production build is a static `dist/` folder, and the project needs no extra UI framework. React components are functional components and use hooks.

## Requirements

- Node.js 18 or newer (the build was run on Node.js 22)
- npm

## Install, run, and build

From this `web/` directory:

```bash
npm install
npm run dev
```

`npm run dev` starts the local site (Vite prints the URL, usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `web/dist/`. `npm run preview` serves that build locally.

`node_modules/` and `dist/` are gitignored. Do not commit them.

## Updating the briefing

Page copy lives in [`src/data/briefing.js`](src/data/briefing.js), separate from the components, so a daily run can edit that file without touching the layout.

- `meta` holds the title, last-updated date, and footer.
- `sections` holds Parliamentary Inquiry, TGA Safety Alerts, Enforcement Actions, Health Impacts, TGA Compliance Framework, Legal Framework, and Additional Sources.
- Each item has `blocks` (paragraphs, quotes, lists) and a `sources` array of `{ label, url, published }`.
- Add only claims, dates, and URLs that already appear in the repository. Every item needs at least one `url`.
- Dated entries are oldest-first, April 2026 through November 2026.
- Components open each source with `target="_blank"` and `rel="noopener noreferrer"`. Styling is plain CSS in [`src/styles.css`](src/styles.css).
