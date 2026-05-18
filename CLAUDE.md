# LD — Site vitrine traiteur

> Site vitrine francophone pour activité traiteur événementiel à Genève. Cible : événements d'entreprise 50-300 personnes, prestation sur site (sans fourniture du lieu).

## Structure

```
/
├── src/             # Code Astro (composants, pages, layout, i18n)
├── content/         # Textes du site (fr.json)
├── public/          # Assets statiques (images, favicons)
└── Traiteur copie/  # Données métier (compta, contacts) — lecture seule, ignorée par git
```

## Stack

- Astro 5.x (statique)
- Tailwind CSS 4
- GSAP + Lenis (animations, scroll lissé)
- Langue : FR uniquement
- Hébergement cible : GitHub Pages + domaine custom `lucadauphin.ch` (DNS via Infomaniak)

## Conventions

- Commits : `type(scope): message` (feat, fix, content, chore)
- Branches : `feature/`, `fix/`, `content/`
- Tarifs : **toujours "sur demande"**, jamais de montants publics
- Référence client : pas de citation sans accord explicite documenté

## Référence métier

Le dossier `Traiteur copie/` contient les données de l'activité (clients, factures, bilans). À consulter pour le ton et l'historique des prestations. **Ne jamais modifier** ce dossier depuis le projet web. Il est ignoré par git.

## Never

- Hardcoder coordonnées en dur dans les composants (passer par `content/fr.json`)
- Afficher des prix sur le site
- Citer un client sans accord explicite documenté
- Push sur main sans `npm run build` OK
