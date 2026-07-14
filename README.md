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

The display typeface is Syne. Its lowercase `g` has a deliberately
cropped-looking lower form. This is part of the typeface design, not a CSS
clipping defect, and the distinctive appearance has been intentionally kept.

- Do not replace Syne or loosen its heading line height merely to alter the
  lowercase `g`.
- Treat the shape as intentional unless other letters are visibly cut by a
  container boundary.
- If a genuine clipping issue is suspected, test `g`, `j`, `p`, `q`, and `y`
  and inspect parent overflow before changing the type system.
- Preserve the explanatory comment beside the display-heading rules in
  `src/index.css` so the same issue is not misdiagnosed again.

## Deployment

The project is configured for Vercel through `vercel.json`. Production assets
are generated in `dist/`.
