# content — Textes du site

> Toutes les chaînes textuelles du site, modifiables sans toucher au code.

## Fichier

- `fr.json` — toutes les chaînes du site (FR uniquement)

## Convention de clés

Hiérarchique par section, telle qu'utilisée dans les composants via `dict.<section>.<clé>` :

```
{
  "meta":     { "title", "description" },
  "nav":      { "services", "approach", "bar", "about", "contact" },
  "hero":     { "titleSegments[]", "subtitle", "ctaPrimary", "ctaSecondary" },
  "services": { "title", "intro", "items[]", "noteTitle", "note" },
  "bar":      { "eyebrow", "title", "intro", "signature*", "drinks[]", ... },
  "approach": { "title", "intro", "points[]" },
  "about":    { "title", "chef", "method" },
  "faq":      { "eyebrow", "title", "subtitle", "items[]" },
  "contact":  { "title", "intro", "phone*", "whatsapp*", "email*", "addressLines[]", "quoteNote" },
  "footer":   { "tagline", "rights", "legal", "langLabel", "contactLabel", "navLabel" },
  "legal":    { "title", "body", "back" }
}
```

## Règles locales

- **Pas de prix**, jamais (tarifs sur demande uniquement)
- **Références clients** : ne citer qu'avec accord explicite documenté du client
- **Ton** : professionnel mais chaleureux, pas guindé. Positionnement « cuisine du monde / fusion créative »
- Toute clé ajoutée doit être consommée par un composant — éviter les clés orphelines
