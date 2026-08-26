# CLAUDE.md

## Project

Marketing site and lead-gen funnel for The Fluency House, Pilar's online English-tutoring business — Next.js 16 / React 19, bilingual (ES/EN), targeted at Argentina.

## Commands

- Install: `npm install`
- Develop: `npm run dev`
- Build: `npm run build`
- Start (production): `npm run start`
- Lint: `npm run lint`
- Storybook: `npm run storybook` / `npm run build-storybook`
- No test command exists in this repo — don't assume one.

## Architecture

- `src/app/` — routes: homepage (`page.tsx`), `blog/[slug]`, `clases/[ciudad]/[barrio]` (programmatic local-SEO landing pages), `evaluacion` (Spanish placement quiz), `explorar`.
- `src/components/layout/` — one component per homepage section (`NavBar`, `HeroSection`, `ProblemSection`, `PricingSection`, `FAQSection`, `CTABanner`, `Footer`). This is where the live design actually lives — see `DESIGN.md`.
- `src/components/ui/` — small reusable effects (`BorderGlow`, `Waves`, `ShinyText`).
- `src/lib/translations.ts` — all site copy, both languages, in one file. `src/lib/LanguageContext.tsx` provides the `en`/`es` toggle (default `es`).
- `src/lib/geo.ts` — city/neighborhood data backing the `clases/[ciudad]/[barrio]` pages.
- `src/lib/mdx.ts` + `content/blog/*.mdx` — blog post loading.
- `src/lib/constants.ts` — `BOOKING_URL` (Cal.com), the single conversion target for every CTA on the site.

## Working rules

- **Edit both languages together.** Any copy change in `src/lib/translations.ts` needs both the `en` and `es` blocks updated in the same change — never ship one without the other.
- **No color/font/shadow tokens are defined in `tailwind.config.ts`.** Every color is a literal Tailwind default-palette class or inline hex; every custom class you reach for must already exist in config or you must add it there first. A previous design pass shipped components using undefined classes (`bg-crimson`, `font-handwrite`, etc.) that silently rendered unstyled — that dead code has since been removed. Don't repeat the pattern.
- **`.claude/skills/class-summary`** is unrelated to this codebase — it's a separate skill for writing student class recaps, not for editing this site.
- The root PDF file(s) occasionally present in this repo (teaching material) are gitignored (`*.pdf`) — don't assume they're tracked or expect them to persist.

## Product and UI

Before product or copy work, read `PRODUCT.md`. Before writing or changing UI, also read `DESIGN.md`. Reuse the documented live components and patterns; ask before introducing a pattern the design system doesn't already cover.
