# AGENTS.md

## Project overview
- This is a Vite + React + TypeScript app.
- Styling is Tailwind CSS with additional CSS files in `src/`.
- Content includes MDX articles under `src/content/articles/`.
- Routing is handled by `react-router-dom`.

## How to run
- Install deps: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

## Lint and tests
- Lint all: `npm run lint`
- Single file lint: `npx eslint src/path/to/file.tsx`
- Type check only: `npx tsc -b`
- Tests: no test runner is configured in this repo.
  - If adding tests, document the new command here.

## Scripts (package.json)
- `dev`: Vite dev server
- `build`: `tsc -b && vite build`
- `lint`: `eslint .`
- `preview`: `vite preview`

## TypeScript configuration
- Strict mode is enabled (`"strict": true`).
- Unused locals and parameters are errors.
- `noUncheckedSideEffectImports` is enabled; avoid side-effect-only imports.
- `moduleResolution` is `bundler` and `moduleDetection` is `force`.
- `jsx` mode is `react-jsx`.

## ESLint configuration
- Uses flat config in `eslint.config.js`.
- Extends:
  - `@eslint/js` recommended
  - `typescript-eslint` recommended
  - `react-hooks` recommended
  - `react-refresh` vite config
- Global ignores: `dist/`
- Linted files: `**/*.{ts,tsx}`

## Code style conventions
- Language: TypeScript for all React components.
- Components are function components using React hooks.
- Prefer named, top-level component definitions.
- Keep components small and composable; split when sections get large.
- Favor explicit props and interfaces for public components.
- Use `const` for component declarations and local variables.
- Prefer arrow functions for components and inline callbacks.

## Imports
- Use ES module syntax (`import ... from ...`).
- Order imports in groups:
  1) External libraries
  2) Internal modules (components, pages, utils)
  3) Styles and assets
- Keep relative imports sorted by path depth.
- Avoid side-effect-only imports unless required.

## Formatting
- There is no Prettier config; follow existing file formatting.
- Use semicolons in TS/TSX (see `src/App.tsx`).
- Use single quotes for JS/TS strings where consistent.
- Use double quotes for JSX props when needed.
- Wrap JSX with parentheses for multi-line returns.

## Naming conventions
- Components: `PascalCase` (e.g., `LatestArticles`).
- Hooks: `useThing`.
- Files: `PascalCase.tsx` for components, `kebab-case.mdx` for articles.
- CSS classes: Tailwind utility classes, keep long class lists readable.
- Routes: lowercase paths (see `src/App.tsx`).

## Styling and CSS
- Tailwind is used; prefer utility-first styles.
- `tailwind-merge` is available for class merging.
- Global styles live in `src/index.css` and component styles in `src/App.css`.
- Keep theme tokens centralized where possible.

## MDX content
- Articles live in `src/content/articles/` with `.mdx` files.
- Update `src/content/articles/index.ts` when adding new articles.
- Keep frontmatter consistent with existing content.

## Error handling
- Prefer guarding against null/undefined at boundaries.
- Fail fast in components when required data is missing.
- Keep render paths predictable; avoid conditional chaos.

## Performance and UX
- Avoid unnecessary re-renders; memoize expensive components if needed.
- Keep lists keyed by stable IDs.
- Prefer CSS/transform animations over JS where possible.

## Accessibility
- Use semantic HTML elements.
- Ensure interactive elements are keyboard reachable.
- Provide `aria-` attributes where needed.

## File structure
- `src/components/` holds UI sections and shared components.
- `src/pages/` holds route-level pages.
- `src/content/` holds MDX content and index helpers.
- `src/assets/` holds images.

## Local development tips
- If Vite HMR is stuck, restart `npm run dev`.
- If TypeScript gets out of sync, run `npx tsc -b --clean` then `npx tsc -b`.

## Adding new dependencies
- Use `npm install` and keep `package.json` sorted by npm.
- Prefer lightweight libraries; avoid adding heavy dependencies without need.

## Git hygiene for agents
- Do not commit unless explicitly asked.
- Do not rewrite history (no `git reset --hard`, no `git commit --amend`).
- Keep changes scoped to the request.

## Notes for future agents
- There are no Cursor or Copilot rules found in this repo.
- If you add any, update this file accordingly.
