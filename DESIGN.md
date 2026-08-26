# DESIGN.md

## Creative north star

A clean, modern SaaS/EdTech look: white sections alternating with dark (`gray-900`) sections, a single confident green accent (`#22C55E` → `#16A34A` gradient), fully rounded pill buttons and nav links, italic serif display headings paired with a friendly sans body, soft pastel-tinted cards for content grouping, and one small chat-mockup UI moment in the hero as the product's only "showy" element. Git history shows this replaced two earlier passes ("pink/green/purple Duolingo-inspired," then a "Lingopie-inspired" redesign) — the current look is the result of that iteration, not a fixed brief.

## Sources of truth

The design lives in `src/app/page.tsx` and the components it imports directly: `NavBar`, `HeroSection`, `ProblemSection`, `PricingSection`, `FAQSection`, `CTABanner`, `Footer` (all in `src/components/layout/`), plus `src/components/ui/{BorderGlow,Waves,ShinyText}.tsx`.

An earlier "scrapbook" design pass (`TornCard`, `PricingCard`, `ProblemCard`, `SolutionNote`, `Badge`, `GoldStar`, `Paperclip`, their Storybook stories, root `index.html`, and the unused `@radix-ui/*` packages) was never wired in — it had zero real imports outside Storybook and relied on Tailwind classes (`bg-crimson`, `font-handwrite`, etc.) that were never defined. It's been removed from the repo as dead code.

- Tailwind config: `tailwind.config.ts` — fonts + animation keyframes only, no color palette
- Global styles: `src/app/globals.css` — `.border-glow-card` effect + base body style
- Copy/content driving all UI text: `src/lib/translations.ts` (edit both `en` and `es` together)

## Color

No token layer — every color is a literal Tailwind default-palette class or an inline hex value. No `theme.extend.colors` exists in config.

- **Primary green (`green-500`/`green-600`, or `#22C55E`→`#16A34A` gradient):** the one brand color. Used for every primary CTA (`bg-green-500 hover:bg-green-600`), the logo mark gradient, the "featured plan" ring/badge, and small live-status accents ("Class in session" dot). Don't introduce a second competing accent color.
- **`gray-900`:** dark section backgrounds (marquee strip, `CTABanner`, `Footer`) and the pricing-toggle "on" state. Always paired with white/`white/60`/`white/40` text.
- **`gray-50`/`white`:** alternating light section backgrounds (`PricingSection` uses `gray-50`, `Hero`/`FAQ` use `white`) — sections alternate white → gray-50 → white → gray-900 down the page.
- **`gray-400`/`gray-500`/`gray-600`:** secondary/muted text on light backgrounds, consistently — never a custom gray.
- **Pastel accent set** (`orange`, `blue`, `lime`, `purple`, `rose`, `amber`, `green` — each at the `-50`/`-100` shades): used only for the small topic pills in the hero and the problem/solution card backgrounds+icon chips in `ProblemSection.tsx`. Each card gets one color from a fixed rotation (`cardPalette` / `solutionPalette` arrays) — never used for text-heavy content or CTAs.

## Typography

- **Display (`font-display`):** Libre Baskerville, italic, `font-bold`, used only for section `<h2>`s and the hero `<h1>` — always with a `clamp()` custom font size (e.g. `clamp(32px, 5vw, 48px)` for section headings, `clamp(40px, 6vw, 68px)` for the hero). Never used for body copy or UI chrome.
- **Sans (`font-sans`, default):** DM Sans — everything else: nav, buttons, card copy, footer.
- **Mono:** not used anywhere in the live layout components.
- Text sizes are consistently set with arbitrary-value classes (`text-[15px]`, `text-[13.5px]`, etc.) rather than Tailwind's `sm/base/lg` scale — there's no documented type scale, just per-component pixel choices matched to that component's role (nav link ≈15px, card body ≈14px, muted meta text ≈12–13px).

## Spacing, shape, and elevation

- **Corner radius:** fully rounded (`rounded-full`) for every interactive control — buttons, nav pills, badges, the language toggle. Content cards use `rounded-2xl` (`ProblemSection` cards, the hero chat window). No sharp corners appear anywhere in the live UI.
- **Section rhythm:** every `<section>` uses `py-16 md:py-24 px-5 md:px-6` and a `max-w-[1140px] mx-auto` inner wrapper — this is the layout container pattern for any new section.
- **Elevation:** mostly flat with borders (`border border-gray-100`/`gray-200`) rather than shadows; `shadow-sm` appears only for small floating elements (active toggle pill, chat bubbles). The one deliberate elevation effect is `BorderGlow` (`src/components/ui/BorderGlow.tsx` + `.border-glow-card` in `globals.css`) — a cursor-reactive animated gradient border, used specifically on pricing cards to signal "the interesting object on this page."

## Layout and responsive behavior

- Two-breakpoint pattern throughout: unprefixed (mobile) → `md:` for tablet/desktop, occasionally `lg:`/`xl:` for grid column counts (e.g. problem cards go 1 → 2 → 3 columns). No custom breakpoints defined in `tailwind.config.ts` — default Tailwind breakpoints only.
- `NavBar` collapses to a hamburger menu below `md:`; the hero grid (`lg:grid-cols-2`) stacks to one column below `lg:`.
- No `prefers-reduced-motion` handling found anywhere, despite several looping animations (typewriter effect, marquee, chat typing dots, `Waves` background) — worth checking before adding more motion.

## Components (live)

- **`layout/NavBar`** — sticky, blurred-white, pill nav links, ES/EN toggle, green pill CTA, collapses to hamburger on mobile.
- **`layout/HeroSection`** — two-column hero: left is headline (partly rendered via `ShinyText` for a shimmer effect on one phrase) + animated typewriter loop of student goals + CTA pair + stat row; right is a self-contained "chat app" mockup (fake macOS window chrome, message bubbles, animated typing dots) built entirely from inline styles/hex, not reusable pieces. Includes an animated `Waves` canvas background and a dark marquee ticker below the fold.
- **`layout/ProblemSection`** — two back-to-back sections (`#how-it-works` problems grid, then a solutions grid) built from one repeated card shape: `rounded-2xl` pastel card + icon chip + heading + copy, colors cycled from a fixed palette array per section.
- **`layout/PricingSection`** — individual/group toggle (pill, `gray-900` active state) + 3 `PlanCard`s wrapped in `BorderGlow`, one marked "featured" with a green ring and popular badge.
- **`layout/FAQSection`** — accordion built with local `useState`, plain button + animated chevron. No external accordion library — the Radix accordion dependency from the earlier design pass has been removed.
- **`layout/CTABanner`**, **`layout/Footer`** — dark (`gray-900`) closing sections, footer has a 4-column grid (brand/classes/about/contact) plus a second language toggle.
- **`ui/BorderGlow`** — the one genuinely reusable visual effect component; cursor-reactive glow border, currently only used on pricing cards but written generically enough to reuse elsewhere.
- **`ui/Waves`, `ui/ShinyText`** — single-use decorative effects, both only used in the hero.

`components/decorative/`, `components/typography/` — empty directories, never populated.

## Interaction and accessibility

- `@storybook/addon-a11y` is installed, but no accessibility standard (e.g. WCAG AA) is documented anywhere in the repo.
- Interactive controls (accordion buttons, toggles) use `aria-expanded`/`aria-pressed` correctly and consistently — that pattern is worth continuing for new interactive components.
- No focus-visible styling was found beyond browser defaults; no reduced-motion handling (see above).

## Do

- Match a new section to the existing rhythm: `max-w-[1140px] mx-auto`, `py-16 md:py-24 px-5 md:px-6`, alternating white/`gray-50`/`gray-900` background as it goes down the page.
- Use `rounded-full` for anything clickable, `rounded-2xl` for content cards — that split is consistent everywhere in the live UI.
- Keep green as the only accent used for actions/CTAs; use the pastel rotation only for card-grouping backgrounds, never for buttons or links.
- Add new bilingual copy to both `en` and `es` blocks in `src/lib/translations.ts` in the same change.

## Avoid

- Don't add a second saturated accent color alongside green; the palette otherwise stays in gray/pastel/white/dark territory.
- Don't reintroduce ad-hoc color/font/shadow class names without first adding them to `tailwind.config.ts` — that's exactly how the previous design pass ended up dead.
