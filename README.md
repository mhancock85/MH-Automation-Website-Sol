# MH Automation — Sol

A production landing page for MH Automation, an independent automation
consultancy serving growing finance teams and smaller businesses.

The site uses a lighter editorial design system, electric turquoise brand
accents, responsive layouts, accessible motion preferences, and a custom
animated automation-engine visual.

## Current positioning

The primary offer is controlled AI automation for growing finance teams,
focused on repetitive reporting, reconciliation, and data-processing work.
The secondary offer helps smaller businesses automate slow operational tasks,
including invoicing, quote writing, and client onboarding, or build practical
assets such as websites, dashboards, portals, and pricing tools.

Keep the finance specialism prominent. Broader business automation should
demonstrate range without turning the offer into a generic technology service.

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

## Planned enquiry workflow

The enquiry form is currently disabled and does not submit or store data. The
agreed future workflow is:

1. Submit the website form to a secure Vercel server function.
2. Validate the request and reject spam using a honeypot and rate limiting.
3. Add the enquiry to a Google Sheet used as the initial lead register.
4. Email the enquiry details immediately to `mark@mhautomation.co.uk`.
5. Show a confirmation screen with an optional Google Calendar appointment
   booking link.
6. Optionally send the prospective client a short acknowledgement email.

The Google Sheet should track the submission date, name, email, company,
enquiry, source, status, next action, and notes. Do not submit directly from
the browser to Google Sheets; keep credentials and validation inside the
server function. Add a short privacy notice before enabling submissions.

Google Calendar should let the prospect choose from available appointment
slots after submitting. The form should not create an event automatically.
This workflow is documented only and has not yet been implemented.

## Deployment

The project is configured for Vercel through `vercel.json`. Production assets
are generated in `dist/`.

- Production: <https://mh-automation-website-sol.vercel.app>
- Repository: <https://github.com/mhancock85/MH-Automation-Website-Sol>
- Production branch: `main`
- Run both quality checks before committing and deploying.
