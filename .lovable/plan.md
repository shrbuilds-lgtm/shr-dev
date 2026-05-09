# Srihari — Cyberpunk Portfolio Plan

A bold, dark, Spider-Man-meets-cyberpunk portfolio with graffiti energy inspired by your reference image. Built as a single scrolling landing page with smooth section transitions.

## Vibe & Aesthetic

- **Mood**: Dark, gritty, neon-edged. Think Spider-Verse comic panels + cyberpunk HUD.
- **Color palette**:
  - Deep black background (`#0a0a0a`)
  - Spider red accent (`#e10600`) as primary
  - Electric cyan (`#00f0ff`) as secondary neon accent
  - Off-white text (`#f5f5f5`)
  - Subtle grain/halftone texture overlays for that comic/print feel
- **Typography**:
  - Headlines: bold condensed display font (Bebas Neue / Anton — closest free Google Font alternatives to Champion Gothic)
  - Body: JetBrains Mono or Space Grotesk for a techy edge
- **Texture**: subtle halftone dots, paper grain, and red drip/graffiti splashes echoing your reference image.

## Sections (single page, smooth scroll)

### 1. Hero
- Full-viewport split layout
- Left: massive stacked headline "SRIHARI" in display font with glitch/red-shift hover effect, subtitle "STUDENT • GAMER • EDITOR • CODE", small tagline, scroll cue
- Right: your uploaded portrait with red graffiti background, halftone treatment, slight tilt, subtle parallax on scroll
- Animated noise/scanline overlay, faint cyan grid lines

### 2. About
- Two-column: short punchy bio on the left, a "stat block" card on the right (Name, Role, Specialty, Status: ONLINE)
- Skill chips: Gaming, Video Editing, Computers, Coding — styled like cyberpunk tags with neon borders

### 3. Projects / Work
- Grid of 3–6 project cards (placeholder content you can edit later)
- Each card: cover image area, title, short description, tags, hover lift with red glow + corner brackets
- Categories suggestion: Editing reels, Game highlights, Tech/code projects

### 4. Footer
- Bold "LET'S CONNECT" CTA with social placeholders (Instagram, YouTube, GitHub, Email)

## Technical Notes

- Stack: TanStack Start + Tailwind v4 + shadcn (already set up)
- Single route `src/routes/index.tsx` (replaces placeholder); split into components: `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Footer.tsx`, `Navbar.tsx` under `src/components/portfolio/`
- Design tokens added to `src/styles.css`: `--spider-red`, `--neon-cyan`, gradients, glow shadow tokens, halftone background utility
- Fonts loaded via Google Fonts in `__root.tsx` head links
- Your photo copied to `src/assets/srihari.jpg` and used in the hero
- Light scroll animations via CSS (no heavy libs)
- Updated SEO metadata: title "Srihari — Portfolio", description, og tags
- The uploaded `.mp4` and `.jfif` files are treated as inspiration only (not embedded)

## What I'll Need From You Later (optional, can use placeholders for now)

- Real project titles/descriptions/links
- Social handles for the footer

Ready to build when you approve.