# Aarushi Venkatakrishnan: portfolio

Built with [Astro](https://astro.build). Outputs a static site.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321, live-reloads as you edit
npm run build      # production build into dist/
```

## Where things live

| To change… | Edit |
|---|---|
| Name, role, tagline, email, LinkedIn, footer line | `src/data/site.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (tokens at the top) |
| About page text and facts | `src/pages/about.astro` |
| Resume | replace `public/resume.pdf` |
| Case studies | `src/content/work/*.mdx` (one file each) |

## Adding a case study

1. Copy `src/content/work/self-service-platform.mdx` (it uses every component) and rename it. The file name becomes the URL: `my-project.mdx` → `/work/my-project/`.
2. Fill in the frontmatter at the top. `order` sets its position on the home page; `tint` is `blue`, `sand`, `sage` or `lilac`; `draft: true` hides it.
3. Put images in `src/content/work/images/<project>/`. They're resized and compressed automatically on build.
   - Cover: uncomment `cover: ./images/<project>/cover.png` in the frontmatter.
   - In the body: `import shot from './images/<project>/shot.png';` then `<Figure src={shot} alt="…" />`.

### Case study components

- `<Figure src={img} alt="" caption="" width="wide|text" tint="blue" />`: image, optionally page-width or on a tinted panel
- `<TwoUp>…two Figures…</TwoUp>`: side by side (before/after)
- `<Callout label="Key insight">…</Callout>`: pulled-out insight
- `<Stats items={[{ value: '40%', label: 'fewer tickets' }]} />`: outcome numbers

## Deploying

**GitHub Pages:** push to `main`; `.github/workflows/deploy.yml` builds and publishes. In the repo, go to Settings → Pages → Source → **GitHub Actions**. Update `site` in `astro.config.mjs` to your URL. If the repo isn't named `<username>.github.io`, also add `base: '/<repo-name>'` there.

**Netlify / Vercel:** import the repo; they detect Astro automatically.

## TODO

- [ ] LinkedIn URL in `src/data/site.ts`
- [ ] Real `public/resume.pdf`
- [ ] Portrait on About (instructions at top of `src/pages/about.astro`)
- [ ] Outside-of-work line on About
- [ ] Case study content and images
