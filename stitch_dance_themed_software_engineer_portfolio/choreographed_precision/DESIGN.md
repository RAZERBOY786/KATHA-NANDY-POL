---
name: Choreographed Precision
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d3'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe7e1'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#4e4635'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#807663'
  outline-variant: '#d1c5af'
  surface-tint: '#775a00'
  primary: '#775a00'
  on-primary: '#ffffff'
  primary-container: '#c59b27'
  on-primary-container: '#473500'
  inverse-primary: '#eec14b'
  secondary: '#8b4e40'
  on-secondary: '#ffffff'
  secondary-container: '#ffb09e'
  on-secondary-container: '#7a4133'
  tertiary: '#655d59'
  on-tertiary: '#ffffff'
  tertiary-container: '#a99f9b'
  on-tertiary-container: '#3d3633'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf98'
  primary-fixed-dim: '#eec14b'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#380d05'
  on-secondary-fixed-variant: '#6e372a'
  tertiary-fixed: '#ece0db'
  tertiary-fixed-dim: '#cfc4c0'
  on-tertiary-fixed: '#201a18'
  on-tertiary-fixed-variant: '#4c4542'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-hero:
    fontFamily: playfairDisplay
    fontSize: 64px
    fontWeight: '500'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: playfairDisplay
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: playfairDisplay
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: playfairDisplay
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: playfairDisplay
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: playfairDisplay
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: plusJakartaSans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.14em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6.5rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  max-width-content: 1280px
---

## Brand & Style

This design system expresses a dual identity: technical rigor and classical performance art. Designed for an engineer whose creative discipline stems from dance, the interface merges the mathematical precision of software architecture with the fluidity, cadence, and poise of movement. The visual language evokes an airy, haute-couture gallery or classical performance program—avoiding sterile tech tropes in favor of deliberate pacing, rhythmic whitespace, and lyricism.

### Core Principles
- **Kinetic Poise:** Movement and static balance coexist. Elements feel poised on the beat, resting on pristine surfaces with intentional rhythm.
- **Warm Editorial Sophistication:** The canvas rejects stark clinical whites and neon cyans, embracing warm alabaster, brushed champagne golds, and muted terracotta rose.
- **Architectural Fluidity:** Structured modular grids juxtaposed with delicate hairline borders, blurred glass containers, and subtle organic arcs that guide the eye downward in a steady waltz.
- **Quiet Authority:** Premium execution delivered through high-contrast typography, restrained ornamentation, and deliberate negative space.

## Colors

The palette draws directly from stagecraft, balletic warmth, and fine metalwork.

- **Primary (`#C59B27` / Antique Champagne Gold):** Used for focal emphasis, key interactive triggers, active tabs, and refined highlight marks. Carries a burnished luster rather than high-saturation yellow.
- **Secondary (`#D48B7A` / Rose Terracotta):** Represents the warmth of performance, human touch, and dynamic expression. Employed in secondary highlights, subtle gradients, and rhythmic status markers.
- **Tertiary (`#2C2623` / Espresso Obsidian):** The foundational ink for headlines, deep display typography, and high-contrast anchors. Replaces harsh `#000000` with an organic, deep brown-black.
- **Neutral (`#7B7571` / Cashmere Stone):** Calibrated for secondary body typography, metadata labels, structural dividers, and quiet informational states.

### Surface Tokens
- **Canvas Base:** `#FDFBF7` (Warm Alabaster)
- **Surface Elevation 1 (Card Base):** `#FFFFFF` with 80% opacity and blurred backing
- **Surface Elevation 2 (Elevated Foil):** `#F7F3EC`
- **Border & Hairline Neutral:** `#EAE4DC`
- **Subtle Gold Wash:** `rgba(197, 155, 39, 0.08)`

## Typography

The typographic system creates an interplay between dramatic classical headings and modern engineered prose.

- **Headlines (Playfair Display):** Conveys tempo, stage presence, and craftsmanship. Titles larger than 32px employ medium or semi-bold weights with slight negative tracking to feel deliberate and sculpted. Use italics sparingly for rhythm (e.g., specific conceptual phrases, project sub-genres, or philosophical quotes).
- **Body (Plus Jakarta Sans):** Provides pristine legibility for software engineering documentation, technical case studies, and professional project write-ups. Features warm humanist curves that harmonize with the serif titles.
- **Labels & Metas (Inter):** Rendered in uppercase with generous tracking (`0.08em` to `0.14em`) to function as precision markings, project status indicators, and code category taxonomies.

## Layout & Spacing

The layout is governed by a choreographed 12-column responsive fluid grid structured around 4px/8px incremental units, allowing asymmetrical card placements that evoke musical phrases.

### Grid Rhythm & Form Factors
- **Desktop (1024px+):** 12 columns with 32px (`space-xl`) gutters and outer margins scaling dynamically up to a centered `1280px` max-width container. Sections feature generous vertical padding (`space-4xl` to `space-3xl`) to let technical achievements breathe.
- **Tablet (768px – 1023px):** 8 columns with 24px (`space-lg`) gutters and 32px page margins. Dual-column project presentations collapse into alternating fluid panels.
- **Mobile (320px – 767px):** 4 columns with 16px (`space-md`) gutters and 20px page margins. Vertical cadence is maintained with compact `space-2xl` section separation.

### Choreographic Alignment
Content blocks alternate between grounded structural cards and inset focal elements. Technical credentials and repository cards sit alongside editorial narrative blocks, utilizing deliberate off-center tension to lead the viewer's scroll like a dance progression.

## Elevation & Depth

Depth in this system avoids heavy, synthetic drop shadows, opting instead for luminous stage lighting, translucent glass surfaces, and warm champagne halos.

### Layer Tiers
- **Surface Level 0 (Stage Floor):** Warm alabaster backdrop (`#FDFBF7`) with a faint ambient radial glow of soft rose-gold (`rgba(212, 139, 122, 0.05)`) positioned strategically behind key showcase works.
- **Surface Level 1 (Fluid Glass Cards):** Layered containers built with `background: rgba(255, 255, 255, 0.72)`, backdrop filter blur of `16px`, and an ultra-fine 1px perimeter outline (`rgba(234, 228, 220, 0.8)`).
- **Surface Level 2 (Floating Action & Overlays):** Interactive dialogs, project drawers, and floating navbars featuring a dual-stage shadow:
  - Ambient: `0 8px 32px -4px rgba(44, 38, 35, 0.04)`
  - Edge Highlight: Top border hairline `1px solid rgba(255, 255, 255, 0.9)` and lower border `1px solid rgba(197, 155, 39, 0.15)`
- **Hover & Focus Kinematics:** Hovered project tiles lift smoothly by `4px` accompanied by an expanded warm gold-tinted glow: `0 16px 36px -8px rgba(197, 155, 39, 0.12)`.

## Shapes

The geometric architecture balances the crisp structure of code with organic dance lines.

- **Primary Modules & Glass Panes:** Default to `rounded-lg` (16px / 1rem) or `rounded-xl` (24px / 1.5rem), softening the grid boundaries while retaining architectural integrity.
- **Interaction Targets (Pills & Chips):** Action buttons, tag filters, and pill indicators adopt full curvature (`rounded-full`) to invite touch and denote kinetic readiness.
- **Fluid Accents:** Decorative section breaks incorporate gentle, low-amplitude SVG curves (evoking ribbons or arcing limbs) finished with 1px champagne hairlines rather than hard block dividers.

## Components

### Buttons
- **Primary Action (Performance CTA):** Solid champagne gold (`#C59B27`) background with white typography, rendered in `label-lg`, full pill radius (`rounded-full`), padded `14px 28px`. On hover, the surface shifts subtly to a rose-gold sheen (`#D48B7A`) with a subtle `translateY(-2px)` transition.
- **Secondary Action (Quiet Stage):** Clear translucent glass with a 1px border of `#EAE4DC`, tertiary text (`#2C2623`). Hover initiates a warm gold glow and border shift to `rgba(197, 155, 39, 0.5)`.
- **Tertiary Link:** Inline text link styled with `label-lg`, an animated underline that expands from center-out on hover in Antique Gold, accompanied by a faint micro-chevron.

### Cards (Project & Experience Showcases)
- **Glass Dossier Card:** Backed with `rgba(255, 255, 255, 0.75)`, 16px corner radius, 1px perimeter border in `#EAE4DC`, and 24px internal padding.
- **Header:** Features monospace code tags (tech stack) paired with classical italicized project classification subtitles.
- **Footer:** Metrics strip showing GitHub activity, live deployment links, or engineering benchmarks separated by hairline dividers.

### Chips & Badges
- **Skill & Tech Stack Chips:** Compact height (28px), full pill radius, `background: rgba(247, 243, 236, 0.8)`, text in `label-sm` with neutral ink (`#7B7571`). Active or featured skills receive a faint champagne border and text tint (`#C59B27`).
- **Status Indicator (Open to Collaborations):** A living pulse component with a 6px circular dot in `#D48B7A` surrounded by a slow 2-second expanding ring glow.

### Form Inputs & Fields
- **Contact & Inquiry Fields:** Framed with transparent fills and a defined baseline or 1px perimeter border of `#EAE4DC`. 
- **Active State:** Focus illuminates the border in `#C59B27` with a zero-offset box shadow of `0 0 0 3px rgba(197, 155, 39, 0.12)`.
- **Placeholder:** Styled in `body-md` using Cashmere Stone (`#7B7571`) at 60% opacity.

### Lists & Timeline (Dance & Code Milestones)
- **Choreographed Timeline:** A central or offset vertical champagne hairline (`1px solid #EAE4DC`). Nodes are marked by small circular pearl-gold discs (`8px`) that expand into ring markers upon scroll intersection.
- **Entries:** Grouped into year, role, and technical achievements with high typographic hierarchy (`headline-sm` headers over `body-md` descriptions).

### Code & Technical Callouts
- **Engineered Snippets:** Contained within soft porcelain-toned dark blocks (`#24201E`) to create high-value contrast against the light canvas. Syntactic elements highlighted in champagne, warm blush, and pearl.