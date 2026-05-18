# LD

Site vitrine pour activité traiteur événementiel à Genève (FR).

## Stack

- [Astro 5](https://astro.build/) — site statique
- [Tailwind CSS](https://tailwindcss.com/) — styling
- GSAP + Lenis — animations et scroll lissé

## Développement

```bash
npm install
npm run dev       # localhost:4321
npm run build     # build production dans dist/
npm run preview   # preview du build
```

## Structure

| Dossier | Rôle |
|---|---|
| `src/` | Code Astro (composants, pages, layout, i18n) |
| `content/` | Textes du site (`fr.json`) |
| `public/` | Assets statiques (images, favicons) |
| `Traiteur copie/` | Données métier (compta, contacts) — lecture seule, ignorée par git |

## Déploiement

Site statique (`dist/`) destiné à GitHub Pages, domaine custom `lucadauphin.ch` pointé via Infomaniak (DNS).
