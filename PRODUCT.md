# PRODUCT.md

## Surface

Marketing site + lead-gen funnel for The Fluency House, a one-person online English-teaching business. Bilingual (Spanish default, English toggle), built for the Argentine market (`es-AR` locale, `clases/[ciudad]/[barrio]` local-SEO landing pages) but classes are delivered online to anyone. The site's job is to get a visitor to book a free trial class via Cal.com (`BOOKING_URL`), not to be the product itself — the actual product is the live class.

## Users

- **Adult professionals learning English (primary):** B1–C1 level, often studying for a specific real-world need — a job interview, IELTS, working with international clients — not for a grade or a diploma. Frustrated by prior textbook-based classes. May be based in Argentina or elsewhere Spanish-speaking (site copy name-checks Buenos Aires and Madrid).
- **Companies / teams (Enterprise plan):** businesses whose employees need business English for international clients, remote work, or cross-border roles. Buyer is likely HR/management, not the end learner.

## Purpose

Help adults get comfortable and fluent in *real* English — the version spoken between native speakers, not the textbook version — through classes custom-built around each student's interests, level, and goals, taught personally by Pilar. Shortest successful loop: visitor lands on the homepage → recognizes their own frustration with prior English classes in the "Sound familiar?" section → books a free trial class → the trial class itself proves the personalized, no-pressure approach → converts to a weekly plan (Conversation or Full English).

## Boundaries

Repeated, explicit in the copy itself — this product deliberately avoids becoming:
- A pre-packaged curriculum or textbook/worksheet-based course ("No student books. No PDFs from 2011.")
- Generic, one-size-fits-all lessons — every class is built from scratch per student.
- Formal, "classroom" English detached from how people actually speak.
- Graded, judgmental, or high-pressure — no grades, no accent-shaming, no student-number treatment.

## Personality

- **Warm and personal, not corporate:** copy speaks in first person ("just let me know," "give me 24 hours notice"), footer signs off as a real person, not a brand voice.
- **Real over polished:** leans on lived experience (5 years of real business English at a US company) as the core credibility claim, not credentials or certifications.
- **Low-pressure, high-encouragement:** "No grades. No judgment on your accent. No pressure." — explicitly named as a design principle, not just a tone.
- **Genuinely fun:** "It's supposed to be fun. Genuinely." — the emphatic "Genuinely" is itself a tonal cue: the copy anticipates skepticism that an English class could be fun and pushes back on it directly.

## Anti-references

- **The traditional student-book method:** "opens the student book, reads the dialogue out loud, asks you to repeat it" — named directly as the thing to avoid.
- **Generic worksheets / photocopied pages:** called out as impersonal and forgettable.
- **Formal/written-register English taught as if it's spoken English:** the gap between "what the book teaches" and "what a native speaker actually says" is a recurring theme across problem/solution copy.

## Product principles

- If a design or copy decision could make the experience feel more like a generic class (fixed curriculum, standardized material, formal tone), prefer the option that keeps it personal and built-around-the-student instead.
- Every class-plan feature description should tie back to a concrete, real deliverable (written feedback, a progress tracker, WhatsApp access) rather than abstract promises.
- Keep pricing and plan differences legible at a glance — the two individual plans (Conversation vs. Full English) are differentiated by structure/depth, not by quality tier.

## Accessibility and domain requirements

- Bilingual content (ES/EN) is a hard requirement — copy lives in `src/lib/translations.ts` and must stay in sync across both languages when either is edited.
- No accessibility requirements or WCAG targets were found documented in the repo; Storybook includes `@storybook/addon-a11y`, suggesting some intent to check accessibility, but no explicit standard is stated anywhere. **Needs your input** if there's a target (e.g. WCAG AA).
