# julestranchier.com

Portfolio personnel de Jules Tranchier — AI-augmented Full-Stack Engineer freelance basé à Paris.

Site vitrine présentant le parcours, les compétences, les projets, les expériences et un CV imprimable.

## Stack

- **Framework** : [Next.js 16](https://nextjs.org) (App Router, React 19)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Heroicons](https://heroicons.com)
- **Tests** : [Vitest](https://vitest.dev)
- **Déploiement** : [Vercel](https://vercel.com)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande         | Description                                  |
| ---------------- | -------------------------------------------- |
| `npm run dev`    | Serveur de développement                     |
| `npm run build`  | Build de production                          |
| `npm run start`  | Démarre le serveur de production (post-build) |
| `npm run lint`   | Lint ESLint                                  |
| `npm test`       | Lance la suite de tests Vitest               |

## Structure

```
src/
├── app/              # Routes App Router (page, cv, layout, sitemap, robots, OG image)
├── components/       # Composants UI, sections, layout, cv
├── data/             # Contenu du portfolio (content.ts)
├── hooks/            # Hooks React (useScrollSpy)
├── lib/              # Utilitaires (cn)
└── types/            # Types partagés
```

## SEO & sécurité

- Métadonnées Open Graph / Twitter et image OG générée dynamiquement (`src/app/opengraph-image.tsx`)
- `sitemap.xml` et `robots.txt` générés (`src/app/sitemap.ts`, `src/app/robots.ts`)
- En-têtes de sécurité (HSTS, CSP, X-Frame-Options, etc.) configurés dans `next.config.ts`

## Déploiement

Déployé automatiquement sur Vercel à chaque push sur la branche par défaut.
