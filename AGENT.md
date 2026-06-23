# AGENT.md

## Purpose

This document defines the engineering standards, architecture principles, coding rules, optimization requirements, SEO practices, content generation standards, accessibility requirements, and decision-making framework that every AI coding agent must follow when contributing to this project.

This file is intentionally technology-agnostic and reusable across future projects.

The AI agent must prioritize:

1. Maintainability
2. Scalability
3. Performance
4. Accessibility
5. Security
6. SEO
7. Developer Experience
8. Conversion Optimization
9. Content Quality
10. Long-Term Editability

When multiple solutions are possible, choose the solution that provides the best balance between:

* Performance
* Simplicity
* Scalability
* Maintainability

Never optimize for short-term speed at the cost of future maintainability.

---

# Agent Behavior

## Thinking Requirements

Before generating code:

1. Analyze requirements completely.
2. Identify edge cases.
3. Consider performance implications.
4. Consider accessibility implications.
5. Consider SEO implications.
6. Consider future extensibility.
7. Consider mobile experience.
8. Consider security implications.
9. Consider maintainability.

The agent should use maximum reasoning capability before implementation.

Never generate the first solution that comes to mind.

Evaluate multiple approaches internally and select the strongest implementation.

---

# Engineering Philosophy

## Core Rule

Code is written once but maintained for years.

Prioritize:

* Readability
* Structure
* Consistency
* Scalability

Avoid:

* Clever code
* Overengineering
* Premature optimization
* Unnecessary abstractions

---

# Project Structure

Always prefer:

```text
src/
│
├── app/
├── pages/
├── components/
│   ├── ui/
│   ├── sections/
│   ├── layouts/
│   └── shared/
│
├── hooks/
├── services/
├── lib/
├── utils/
├── types/
├── constants/
├── data/
├── assets/
├── styles/
└── config/
```

Never place unrelated logic together.

Each file should have a single responsibility.

---

# Naming Conventions

## Variables

Use:

```js
userProfile
membershipPlan
transformationData
```

Avoid:

```js
x
data
temp
obj
```

---

## Functions

Use:

```js
calculateMembershipPrice()
generateStructuredData()
fetchUserProfile()
```

Avoid:

```js
doStuff()
handleData()
run()
```

---

## Components

Use:

```js
HeroSection
PricingCard
TrainerSelector
FacilityExplorer
```

Avoid:

```js
hero
card
component1
```

---

# Code Quality Rules

Every generated code block must:

* Be self-documenting
* Use meaningful names
* Follow language conventions
* Minimize nesting
* Avoid duplication
* Follow SOLID principles where appropriate

---

# Comments Policy

Comments should explain:

WHY

not

WHAT

Good:

```js
// Prevents layout shift during image hydration
```

Bad:

```js
// Create image
```

Do not add trivial comments.

Add comments only where future maintainers would benefit.

---

# Performance Standards

Performance is mandatory.

---

## Critical Rules

Minimize:

* JavaScript execution
* Network requests
* Layout shifts
* Render blocking resources

Prioritize:

* Static generation
* Server rendering
* Edge delivery
* Code splitting
* Lazy loading

---

## Asset Rules

Images:

* AVIF preferred
* WebP fallback
* Responsive sizing
* Lazy loading

Videos:

* Compressed
* Poster images required
* Lazy loaded

Fonts:

* Self-hosted when possible
* Variable fonts preferred
* Minimize font families

---

## JavaScript

Avoid unnecessary:

* Effects
* Watchers
* Observers
* Re-renders

Use:

* Memoization when justified
* Dynamic imports
* Tree shaking

Never add libraries for trivial functionality.

---

# Frontend Standards

## UI Principles

Every UI should be:

* Responsive
* Accessible
* Consistent
* Fast

Design hierarchy should be clear.

Users should understand:

1. Where they are
2. What the page offers
3. What action to take

within seconds.

---

## Responsive Design

Mobile-first approach.

Required breakpoints:

```css
sm
md
lg
xl
2xl
```

No horizontal scrolling.

No fixed-width layouts.

---

# Accessibility Standards

Required:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* ARIA only when necessary
* Screen reader support
* Reduced motion support

All interactive elements must be reachable by keyboard.

---

# SEO Standards

SEO is not optional.

Every page must include:

* Unique title
* Unique meta description
* Canonical URL
* Open Graph tags
* Twitter metadata
* Structured data

---

## Semantic Structure

Use:

```html
<header>
<main>
<section>
<article>
<aside>
<footer>
```

Avoid div-only layouts.

---

## Heading Hierarchy

Exactly one H1 per page.

Follow:

```html
H1
H2
H3
H4
```

Never skip heading levels.

---

## Internal Linking

Generate logical internal links.

Support crawlability.

Avoid orphan pages.

---

## Structured Data

Prefer:

* Organization
* LocalBusiness
* Product
* FAQ
* Article
* Breadcrumb

depending on project type.

---

# Content Generation Standards

Content must never feel AI-generated.

Avoid:

* Generic marketing clichés
* Repetitive phrasing
* Buzzword stuffing
* Keyword stuffing

Content should:

* Sound human
* Be specific
* Provide value
* Match audience intent
* Demonstrate expertise

---

## Writing Style

Prefer:

* Clear language
* Concise sentences
* Natural flow
* Specific examples

Avoid:

* Fluff
* Empty claims
* Artificial enthusiasm

---

## SEO Content

Content must be:

* Helpful
* Original
* Intent-focused
* Structured for readability

Use:

* Headings
* Lists
* Tables where appropriate

Never generate filler solely for SEO.

---

# Conversion Optimization

Every page should answer:

1. What is this?
2. Why should I care?
3. Why trust it?
4. What should I do next?

CTA placement should be intentional.

Avoid excessive CTAs.

---

# Security Standards

Never:

* Expose secrets
* Hardcode credentials
* Trust client input

Always:

* Validate inputs
* Sanitize outputs
* Escape user content
* Follow least privilege principles

Use environment variables.

---

# API Standards

Use:

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

Consistent response shape.

Consistent error handling.

---

# Database Standards

Prefer:

* Normalized schemas
* Explicit relationships
* Indexed queries

Avoid:

* N+1 queries
* Unbounded scans
* Excessive joins

---

# AI Image Generation Standards

When generating images:

Prefer:

* Editable layered compositions
* Isolated subjects
* Transparent backgrounds when useful
* Reusable assets
* Consistent design systems

Always define:

* Style
* Lighting
* Composition
* Color palette
* Camera
* Aspect ratio

Maintain visual consistency across all assets.

---

# Animation Standards

Animations should support UX.

Avoid decorative motion without purpose.

Use:

* Opacity
* Transform
* Scale

Prefer GPU-friendly animations.

Avoid expensive properties:

* Width
* Height
* Top
* Left

for animation.

---

# Component Design Standards

Components should be:

* Reusable
* Configurable
* Isolated
* Testable

Avoid tightly coupled components.

Prefer composition over inheritance.

---

# Dependency Policy

Before adding any dependency:

Ask:

1. Is it necessary?
2. Can native APIs solve this?
3. Is bundle size justified?
4. Is maintenance risk acceptable?

Minimize dependency count.

---

# Testing Standards

Required testing levels:

1. Unit Tests
2. Integration Tests
3. End-to-End Tests

Critical user flows must be tested.

---

# Documentation Standards

Every major module should include:

* Purpose
* Inputs
* Outputs
* Dependencies

Documentation should remain synchronized with implementation.

---

# Refactoring Rules

When improving existing code:

Preserve:

* Behavior
* Accessibility
* SEO
* Performance

Reduce:

* Complexity
* Duplication
* Coupling

Increase:

* Readability
* Maintainability

---

# Final Validation Checklist

Before completing any task verify:

✓ Code is readable

✓ Code is maintainable

✓ Mobile experience is excellent

✓ Accessibility requirements are met

✓ SEO requirements are met

✓ Performance requirements are met

✓ Security requirements are met

✓ Naming is consistent

✓ Unnecessary dependencies were avoided

✓ Components are reusable

✓ Content feels human-written

✓ Future developers can easily modify the implementation

✓ Solution follows project architecture

If any requirement fails, revise the implementation before delivering.

# Verification & Quality Assurance Standards

No task is considered complete until the implementation has been verified through execution, validation, and review.

The AI agent must not assume code works because it compiles.

Verification must include functional testing, performance validation, accessibility checks, UX review, and security analysis.

---

# Local Verification

Before marking any implementation as complete:

1. Install dependencies.
2. Run the project locally.
3. Verify build success.
4. Verify production build success.
5. Verify no runtime errors.
6. Verify no console errors.
7. Verify no hydration errors.
8. Verify no broken imports.
9. Verify no broken routes.
10. Verify no layout issues.

Required checks:

```bash
npm install
npm run lint
npm run typecheck
npm run test
npm run build
npm run start
```

Use equivalent commands for the project's package manager.

Never assume generated code is correct without verification.

---

# Functional Verification

The agent must manually validate:

- Primary user flows
- Navigation
- Forms
- Modals
- Search
- Filters
- Authentication
- Payments
- API integrations
- Mobile interactions
- Keyboard interactions

Validate both:

- Happy paths
- Failure paths

Check:

- Empty states
- Loading states
- Error states
- Edge cases

Every feature must fail gracefully.

---

# Responsive Verification

Verify at minimum:

- 320px
- 375px
- 768px
- 1024px
- 1440px
- 1920px

Check:

- Overflow
- Text wrapping
- Component scaling
- Navigation usability
- Touch targets

No horizontal scrolling unless intentionally designed.

---

# Cross Browser Verification

Validate functionality on:

- Chrome
- Edge
- Firefox
- Safari

Check:

- Layout consistency
- Animation behavior
- Form interactions
- Browser-specific issues

Avoid browser-specific implementations when possible.

---

# Accessibility Verification

Validate:

- Keyboard navigation
- Screen reader compatibility
- Focus states
- Color contrast
- Form labels
- Landmark structure

Required tools:

- Lighthouse
- Axe
- Browser accessibility inspector

Accessibility regressions are considered bugs.

---

# SEO Verification

Validate:

- Metadata
- Canonicals
- Structured data
- Open Graph tags
- Heading hierarchy
- Internal linking
- Sitemap generation
- Robots configuration

Check:

- H1 count
- Meta descriptions
- Indexability
- Crawlability

Never ship pages with duplicate metadata.

---

# Performance Verification

Required audits:

- Lighthouse
- Core Web Vitals

Target scores:

```text
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Verify:

- LCP
- CLS
- INP
- TTFB
- Bundle size
- Image optimization

Investigate any significant regressions.

---

# Security Review

Every implementation must undergo a security review.

The AI agent should actively search for vulnerabilities instead of assuming safety.

---

## Input Validation

Verify:

- Form inputs
- Query parameters
- Route parameters
- API payloads
- User-generated content

Never trust client-side validation alone.

Server-side validation is mandatory.

---

## Authentication Review

Verify:

- Session handling
- Token expiration
- Permission checks
- Authorization logic
- Protected routes

Ensure users cannot access restricted resources.

---

## Secret Management

Verify:

- No API keys in source code
- No secrets in client bundles
- No credentials in repositories
- Proper environment variable usage

Secrets must never appear in logs.

---

## XSS Review

Check all user-rendered content.

Prevent:

- Script injection
- HTML injection
- Unsafe rendering

Prefer safe rendering methods.

Avoid dangerously injecting content unless fully sanitized.

---

## CSRF Review

Verify:

- Sensitive actions require protection
- Proper authentication validation
- Secure cookie configuration

---

## Injection Review

Validate protection against:

- SQL Injection
- NoSQL Injection
- Command Injection
- Template Injection

Use parameterized queries and trusted APIs.

---

## Dependency Security

Before introducing dependencies:

Review:

- Maintenance activity
- Security history
- Bundle impact
- Community trust

Run vulnerability scans:

```bash
npm audit
```

or equivalent tooling.

Avoid abandoned packages.

---

## API Security Review

Verify:

- Rate limiting
- Validation
- Error handling
- Permission checks

Do not expose:

- Internal stack traces
- Secrets
- Database details

---

## File Upload Security

If uploads exist:

Verify:

- File type validation
- Size limits
- Malware scanning support
- Safe storage strategy

Never trust file extensions.

---

# UX Quality Review

The AI agent must review the implementation from the perspective of a real user.

Ask:

1. Is the page immediately understandable?
2. Is the primary CTA obvious?
3. Is navigation intuitive?
4. Is content scannable?
5. Is interaction feedback clear?
6. Are loading states present?
7. Are error messages helpful?

If confusion is possible, improve the experience.

---

# Design Consistency Review

Verify:

- Typography consistency
- Color consistency
- Spacing consistency
- Component consistency
- Motion consistency

No section should feel visually disconnected from the design system.

---

# Final Ship Criteria

A task is only considered complete when:

✓ Application runs locally

✓ Build succeeds

✓ No console errors

✓ No runtime errors

✓ No accessibility violations

✓ No critical security issues

✓ No broken responsive layouts

✓ Lighthouse targets achieved

✓ SEO validation completed

✓ UX review completed

✓ Design system compliance verified

✓ Critical user flows tested

If any item fails, continue iterating until resolved.