# src — Code Astro

> Code source du site vitrine. Composants, pages, layout, i18n.

## Structure réelle

- `pages/index.astro` — page d'accueil (route `/`)
- `pages/mentions-legales.astro` — page légale
- `components/` — un composant par section : Hero, Services, FoodMarquee, Approach, About, Bar, FAQ, Contact, Footer + NavPill, Preloader, SmoothScroll
- `layouts/BaseLayout.astro` — wrapper commun (meta, fonts, Preloader, NavPill, SmoothScroll)
- `i18n/index.ts` — import du dictionnaire depuis `../content/fr.json`
- `styles/global.css` — variables CSS (couleurs, fonts), classes utilitaires `.container-page`, `.section`

## Règles locales

- **Toutes les chaînes textuelles** dans `../content/fr.json` — jamais en dur dans les composants
- **Toutes les images** servies depuis `public/images/` (référencées par chemin absolu `/images/...`)
- Mobile-first : design mobile d'abord, puis breakpoints `md:`, `lg:`
- Lighthouse cible : perf > 90, accessibilité > 95
- Pas de JS client sauf strict besoin (Astro = HTML statique par défaut)

## Dépendances doc

- Textes du site : voir `../content/CLAUDE.md`
