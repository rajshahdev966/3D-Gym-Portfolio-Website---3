---
version: "1.0"
name: "Diamond Gym Lounge"
description: "A premium, immersive, transformation-focused luxury gym website built around the concept of personal evolution through discipline. Every section should feel cinematic, powerful, and aspirational while maintaining fast performance, responsiveness, and conversion-focused UX."

brand:
  personality:
    - Premium
    - Powerful
    - Aspirational
    - Luxurious
    - Elite
    - Transformational
    - Modern
    - Cinematic

  keywords:
    - Transformation
    - Discipline
    - Strength
    - Progress
    - Elite Performance
    - Personal Growth
    - Fitness Excellence

colors:
  primary: "#F6B44A"
  primary-light: "#FFD67A"
  primary-glow: "#FFCA63"
  secondary: "#050505"
  tertiary: "#0F0F0F"
  neutral: "#161616"

  background: "#050505"
  surface: "#0B0B0B"
  surface-elevated: "#121212"

  text-primary: "#F5F5F5"
  text-secondary: "#A1A1AA"
  text-muted: "#71717A"

  border: "rgba(246,180,74,0.15)"
  border-active: "rgba(246,180,74,0.4)"

  accent: "#F6B44A"
  success: "#D4AF37"

gradients:
  portal:
    - "#FFD67A"
    - "#F6B44A"
    - "#A86C18"

  gold-glow:
    - "rgba(255,214,122,0.9)"
    - "rgba(246,180,74,0.4)"
    - "rgba(246,180,74,0)"

  dark-luxury:
    - "#050505"
    - "#090909"
    - "#111111"

  hero-radial:
    - "radial-gradient(circle at center, rgba(246,180,74,0.08), transparent 60%)"

typography:

  display-xl:
    fontFamily: "Bebas Neue"
    fontSize: "clamp(72px, 10vw, 180px)"
    fontWeight: 700
    lineHeight: "0.9"
    letterSpacing: "-0.04em"

  display-lg:
    fontFamily: "Bebas Neue"
    fontSize: "clamp(56px, 8vw, 120px)"
    fontWeight: 700
    lineHeight: "0.95"
    letterSpacing: "-0.03em"

  heading-lg:
    fontFamily: "Inter"
    fontSize: "clamp(36px, 5vw, 64px)"
    fontWeight: 700
    lineHeight: "1"

  heading-md:
    fontFamily: "Inter"
    fontSize: "clamp(28px, 4vw, 40px)"
    fontWeight: 600
    lineHeight: "1.1"

  body-lg:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.8"

  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.7"

  label-md:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0.2em"
    textTransform: "uppercase"

rounded:
  xs: "12px"
  sm: "18px"
  md: "24px"
  lg: "32px"
  xl: "40px"
  pill: "9999px"

spacing:
  base: "8px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  xxl: "96px"
  section-padding: "140px"
  card-padding: "32px"
  container-width: "1440px"

layout:

  content-width: "1440px"

  hero:
    structure: "50/50 Split"
    left: "Content"
    right: "Portal Experience"

  sections:
    vertical-spacing: "140px"

  grid:
    columns: 12
    gap: "24px"

depth:

  style: "Luxury Dark Glass"

  blur: "16px"

  borders:
    primary: "1px solid rgba(246,180,74,0.15)"
    active: "1px solid rgba(246,180,74,0.4)"

  shadows:
    portal:
      - "0 0 40px rgba(246,180,74,0.3)"
      - "0 0 120px rgba(246,180,74,0.15)"

    card:
      - "0 20px 60px rgba(0,0,0,0.4)"

surfaces:

  glass-card:
    background: "rgba(255,255,255,0.02)"
    backdropFilter: "blur(16px)"
    border: "1px solid rgba(246,180,74,0.1)"

  luxury-panel:
    background: "linear-gradient(180deg,#0B0B0B,#050505)"
    border: "1px solid rgba(246,180,74,0.15)"

components:

  navbar:

    height: "88px"

    background:
      default: "transparent"
      scrolled: "rgba(5,5,5,0.75)"

    blur: "20px"

    logo:
      style: "Minimal Gold Mark"

  button-primary:

    background: "#F6B44A"
    textColor: "#050505"

    typography: "{typography.label-md}"

    rounded: "{rounded.pill}"

    padding: "18px 36px"

    hover:
      glow: true
      scale: 1.03

  button-secondary:

    background: "transparent"

    border: "1px solid rgba(246,180,74,0.25)"

    textColor: "#F5F5F5"

    rounded: "{rounded.pill}"

  portal-frame:

    border:
      - "#FFD67A"
      - "#F6B44A"

    glow:
      strength: "high"

    particles:
      enabled: true

  metric-card:

    background: "{surfaces.glass-card}"

    hover:
      translateY: "-6px"

  trainer-card:

    style: "Floating Energy Card"

    background: "{surfaces.glass-card}"

    avatarGlow: true

  pricing-card:

    background: "{surfaces.luxury-panel}"

    border: "1px solid rgba(246,180,74,0.12)"

    featured:
      glow: true
      border: "1px solid rgba(246,180,74,0.4)"

sections:

  hero:

    theme: "Arena Of Transformation"

    centerpiece: "Golden Portal"

    mood:
      - Powerful
      - Inspirational
      - Cinematic

    visual_rules:
      - Black void background
      - Golden energy particles
      - No distracting colors
      - Strong contrast
      - High-end luxury rendering

    interactions:
      - Cursor based portal movement
      - Particle reaction
      - Glow intensification
      - CTA magnetic hover

  metrics:

    style: "Floating Data Blocks"

    interaction:
      - Count up animation
      - Glow pulse

  facility-explorer:

    style: "Luxury Isometric Gym"

    zones:
      - Cardio
      - Strength
      - Functional
      - Recovery

    interaction:
      - Hover illumination
      - Camera micro zoom
      - Detail reveal

  trainers:

    style: "Elite Coach Selection"

    interaction:
      - Avatar morph
      - Energy card transition
      - Badge reveal

  transformation-simulator:

    theme: "Evolution Engine"

    interaction:
      - Before/After morph
      - Progress stages
      - Dynamic metrics

  achievement-wall:

    style: "Hall Of Champions"

    interaction:
      - Trophy reveal
      - Review expansion
      - Gold shimmer

  pricing:

    style: "Luxury Membership Panels"

    plans:
      - Starter
      - Pro
      - Elite

  cta:

    theme: "Commitment Portal"

    interaction:
      - Transforming button
      - Portal pulse
      - Trial booking modal

motion:

  philosophy: "Purposeful & Cinematic"

  durations:
    fast: "150ms"
    normal: "400ms"
    slow: "800ms"
    cinematic: "1200ms"

  easing:
    - "ease-out"
    - "cubic-bezier(0.16,1,0.3,1)"

  hover_patterns:
    - Glow
    - Elevation
    - Magnetic Pull
    - Particle Reaction

seo:

  structure:
    - header
    - main
    - section
    - article
    - footer

  schema:
    - LocalBusiness
    - Gym
    - FAQ

accessibility:

  contrast_ratio: "AA+"

  reduced_motion: true

  keyboard_navigation: true

  focus_states: visible

performance:

  lighthouse:
    performance: 90+
    seo: 95+
    accessibility: 95+

  hero_asset_limit: "2MB"

  strategy:
    - Lazy load 3D
    - Use compressed textures
    - Mobile simplified mode

---

# Design Direction

Diamond Gym Lounge should feel like a premium transformation experience rather than a traditional gym website.

The entire visual language should be derived from the hero portal:

- Pure black backgrounds
- Molten gold highlights
- High contrast lighting
- Luxury glass surfaces
- Energy-based interactions
- Cinematic transitions
- Elite athletic aesthetics

The portal is the visual anchor of the entire design system.

Every section should feel like it exists within the same universe as the hero section rather than appearing as independent website blocks.

Avoid:
- Bright colors
- Blue gradients
- Generic SaaS styling
- Cartoon illustrations
- Flat UI cards
- Excessive white space

Favor:
- Darkness
- Contrast
- Gold energy
- Depth
- Premium materials
- Powerful typography
- Cinematic storytelling