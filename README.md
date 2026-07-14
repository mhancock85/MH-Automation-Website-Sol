# MH Automation — Sol

A production landing page for MH Automation, an independent AI automation
consultancy serving growing service businesses.

The site uses a lighter editorial design system, electric turquoise brand
accents, responsive layouts, accessible motion preferences, and a custom
animated automation-engine visual.

## Local development

Install dependencies and start Vite:

```bash
npm install
npm run dev
```

## Quality checks

Run the TypeScript and production build gates:

```bash
npm run lint
npm run build
```

## Typography guardrail

The display typeface is Outfit. It replaced Syne because Syne's lowercase `g`
has a deliberately truncated-looking shape that appeared to be clipped. Extra
line height does not correct that glyph design.

- Do not restore Syne as the display font without reviewing words containing a
  lowercase `g` at the actual heading sizes.
- Keep large Outfit headings at a line height of at least `1.02`.
- Do not restore the earlier values between `0.93` and `0.98` for display
  headings.
- After changing heading size, line height, overflow, or containers, visually
  test the letters `g`, `j`, `p`, `q`, and `y` on desktop and mobile.
- Check any parent with `overflow: hidden` or `overflow: clip`, because it can
  expose the same problem even when the heading line height is safe.
- Preserve the inline warning beside the display-heading rules in
  `src/index.css`.

## Deployment

The project is configured for Vercel through `vercel.json`. Production assets
are generated in `dist/`.
