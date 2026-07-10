# דוקטור סימולטור — SmartLogBook Design System

## Overview

**Company:** דוקטור סימולטור (Doctor Simulator)
**Product:** SmartLogBook Airline Manager
**Version:** 2.0.0 (March 2025)
**Stack:** Vanilla HTML/CSS/JS PWA + Express.js backend + PostgreSQL

SmartLogBook is a virtual airline management system for flight simulator enthusiasts. It integrates with SimBrief (a flight planning tool) to import real flight data, tracks logbook entries, calculates dynamic fuel/ticket pricing, awards pilot ranks, issues special missions, and provides financial analytics and an interactive route map.

**Primary audience:** Hebrew-speaking flight sim enthusiasts (MSFS, X-Plane, etc.) managing virtual airline operations.

**Source repository:** https://github.com/maor561/SmartLogBook  
*(Codebase: `public/index.html`, `public/css/style.css`, `public/app.js`)*

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **Web App (PWA)** | Single-page app, mobile-first, dark/light theme, RTL Hebrew + LTR English |
| **Dashboard** | Stats overview, SimBrief import, current flight panel, flight history, map |
| **Pricing Analytics** | Revenue/expense charts, fuel cost analysis |
| **Settings** | General config, pricing params, pilot goals |
| **Missions** | 18 special mission cards with progress, rewards |
| **Airline Rating** | Radar chart, category scores, improvement tips |

---

## CONTENT FUNDAMENTALS

### Language & Voice
- **Primary language:** Hebrew (RTL). English supported as secondary.
- **Tone:** Practical and energetic. Uses aviation jargon mixed with Hebrew everyday language.
- **Person:** First person possession — "החברה שלי" (my company), "הטיסות שלי" (my flights).
- **Casing:** Sentence case throughout (no ALL CAPS in content; uppercase used only in small CSS labels).
- **Emoji usage:** Heavy. Emoji are used as icons throughout the entire UI — they replace icon fonts entirely. Examples: ✈️ flights, 💰 profit, ⛽ fuel, 👥 passengers, 🎖️ missions, 🏆 achievements. This is intentional and core to the brand voice.
- **Numbers:** Currency in USD ($), distances in NM (nautical miles), fuel in kg, durations in H:MM format.
- **Copy vibe:** Celebratory on success ("נחיתה טובה ✅"), informative on data, action-oriented on buttons ("טען טיסה", "אשר נחיתה", "שמור הגדרות").
- **Labels:** Short and to the point. No marketing fluff. Functional, data-forward copy.
- **Examples:**
  - "מנהל חברת התעופה שלי" — My Airline Manager
  - "מערכת ניהול טיסות מתקדמת" — Advanced Flight Management System
  - "נחיתה מושלמת! ✅" — Perfect landing!
  - "טען טיסה מ-SimBrief" — Load flight from SimBrief

---

## VISUAL FOUNDATIONS

### Color System
**Dark theme (default):**
- Background primary: `#0f172a` (deep navy)
- Background secondary / cards: `#1e293b` (slate)
- Card hover: `#263348`
- Border: `#334155`
- Text primary: `#f1f5f9`
- Text secondary: `#94a3b8`
- Text muted: `#64748b`

**Light theme:**
- Background primary: `#f8fafc`
- Background secondary: `#f1f5f9`
- Cards: `#ffffff`
- Border: `#e2e8f0`
- Text primary: `#1e293b`
- Text secondary: `#64748b`

**Accent / semantic colors (same in both themes):**
- Accent blue: `#3b82f6` (hover: `#2563eb`)
- Green (success/profit): `#10b981`
- Red (danger/loss): `#ef4444`
- Yellow (warning/medium): `#f59e0b`
- Purple (info/rank): `#8b5cf6`
- Orange (fuel/pricing): `#f97316`
- Indigo (info buttons): `#6366f1`

### Typography
- **Font stack:** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` (system fonts only — no web fonts loaded)
- **No custom typeface.** Relies on OS system fonts for maximum performance on mobile PWA.
- **Google Fonts substitute:** `Inter` or `Noto Sans Hebrew` are closest matches.
- **Size scale:** 0.65rem → 0.68 → 0.72 → 0.75 → 0.78 → 0.82 → 0.85 → 0.88 → 0.9 → 0.95 → 1.0 → 1.05 → 1.15 → 1.3 → 1.4 → 1.9 → 2.0rem
- **Large display numbers:** `font-size: 2rem; font-weight: 700` (stat values)
- **Score display:** `font-size: 64px; font-weight: 800` with gradient clip text

### Spacing & Layout
- **Border radius:** `--radius: 12px` (cards, modals), `--radius-sm: 8px` (inner elements)
- **Card padding:** 20px desktop, 12–14px mobile
- **Grid gaps:** 14–20px
- **Max content width:** 1400px centered
- **Main padding:** 24px desktop, 8–12px mobile

### Backgrounds & Surfaces
- **Header:** `linear-gradient(135deg, bg-secondary, bg-card)` — subtle gradient
- **Stat cards:** Each has a unique subtle diagonal gradient tint matching the card's accent color (10% opacity)
- **Rating score:** `linear-gradient(135deg, #f59e0b, #f97316)` as gradient text
- **No background images or illustrations.** Pure CSS + emoji.
- **Sections use solid background colors only** — no textures, patterns or full-bleed images.

### Borders & Shadows
- **Standard shadow:** `0 4px 24px rgba(0,0,0,0.4)` (dark), `0 4px 24px rgba(0,0,0,0.1)` (light)
- **Hover shadow:** `0 8px 16px rgba(0,0,0,0.2)` on cards
- **Accent glow:** `box-shadow: 0 0 24px rgba(59,130,246,0.12)` on current-flight panel
- **Focus ring:** `box-shadow: 0 0 0 3px rgba(59,130,246,0.1)` on inputs
- **Modal shadow:** `0 24px 64px rgba(0,0,0,0.5)`
- **Borders:** 1px solid `--border` everywhere. Active state uses `--accent` border color.
- **Left/right accent bars:** 3–4px wide colored strips on the right side of section cards (RTL) and left side of notifications

### Animation & Motion
- **Transition:** `0.2s ease` globally (very snappy)
- **Tab switch:** `tabFadeSlideIn` — fade + 8px Y translate, 0.22s
- **Current flight:** `slideIn` — fade + 8px Y, 0.3s
- **Modal open:** `scaleIn` — scale 0.95→1 + fade, 0.2s
- **Notification in:** `slideInRight` — slides from right 400px, 0.3s
- **Mission pulse:** `urgencyPulse` — box-shadow pulse, 2.4s infinite
- **Hover states:** `translateY(-1px)` or `translateY(-2px)` on buttons and cards. `scale(1.05)` on rank badge.
- **Press state:** `scale(0.97)` on `.btn:active`
- **No spring/bounce animations.** All easing is `ease` or `ease-out`.

### Cards
- Background: `--bg-card` with 1px `--border`
- Border radius: 12px
- Shadow: `--shadow`
- Hover: background shifts to `--bg-card-hover`, `translateY(-2px)`
- Cards have a colored 4px right-side accent bar via `::before` pseudo-element

### Buttons
- 8px border radius, 11px vertical padding
- Primary: blue gradient `#3b82f6 → #1d4ed8` with blue glow
- Success: green gradient `#10b981 → #059669` with green glow
- Info: indigo gradient `#6366f1 → #8b5cf6` with indigo glow
- Secondary: `--bg-secondary` + border
- Icon: `--bg-secondary` + border, color changes to accent on hover
- Hover: `translateY(-1px)` + stronger glow shadow
- Active: `scale(0.97)`

### Modals
- Backdrop: `rgba(0,0,0,0.72)` with `backdrop-filter: blur(4px)`
- Modal: `--bg-card`, 1px border, 12px radius, large shadow
- Animation: scaleIn 0.2s

### Corner Radii
- Cards, modals: 12px
- Buttons, inputs, inner cards: 8px
- Badges/pills: 20px (fully rounded)
- Progress bars: 4px
- Scrollbar thumb: 4px

### Imagery & Color Vibe
- **No photography or illustrations.** The app is entirely emoji + CSS.
- **Color temperature:** Cool blue-dominant dark palette. Aviation blue (#3b82f6) is the primary brand color.
- **Accent pops:** Orange for fuel/pricing, purple for rank/info, green for success.

### RTL / Internationalization
- `html[lang="he"]` sets `direction: rtl`
- `html[lang="en"]` sets `direction: ltr`
- Accent bars appear on the `right` side of cards (RTL convention)

---

## ICONOGRAPHY

**No icon font or SVG icon set is used.** The entire UI relies on **emoji as icons**. This is a deliberate design decision for the PWA — zero dependency, works everywhere, culturally expressive.

**Core emoji vocabulary:**
| Emoji | Meaning |
|---|---|
| ✈️ | Flights, aviation, load |
| 💰 | Profit, revenue, financial |
| ⛽ | Fuel cost |
| 👥 | Passengers |
| 🌍 | Distance, route map |
| ⏱️ | Flight hours, duration |
| 📊 | Analytics, charts |
| 🎖️ | Missions, achievements |
| 🏆 | Rank, trophy |
| ⭐ | Rating, favorites |
| 🗺️ | Map, routes |
| ⚙️ | Settings |
| 🏠 | Dashboard |
| 💹 | Dynamic pricing |
| 📈 | Charts, trends |
| 🛬 | Landing, confirm flight |
| 🔄 | Refresh, reset |
| 💾 | Save |
| 📥 / 📊 | Import/Export Excel |
| 🌙 | Dark mode toggle |
| ✅ | Success/confirm |
| 💥 | Penalty/hard landing |
| 📄 | Report |
| 🎯 | Goals |
| 📦 | Cargo |
| 👨‍✈️ | Crew |
| 🔧 | Maintenance, operational costs |
| 🎫 | Boarding pass / ticket |
| 📲 | Install PWA |

**App icon:** Circle shape with dark navy background and a white airplane SVG. Located in `assets/icon-192.svg` and `assets/icon-512.svg`.

---

## Files Index

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← CSS design tokens
├── assets/
│   ├── icon-192.svg             ← App icon (small)
│   ├── icon-512.svg             ← App icon (large)
│   └── style.css                ← Full original CSS from repo
├── preview/
│   ├── colors-dark.html         ← Dark theme color palette
│   ├── colors-light.html        ← Light theme color palette
│   ├── colors-semantic.html     ← Semantic/accent colors
│   ├── type-scale.html          ← Typography scale
│   ├── type-specimens.html      ← Type in context
│   ├── spacing-tokens.html      ← Spacing & radius tokens
│   ├── shadows-elevation.html   ← Shadow & elevation system
│   ├── buttons.html             ← Button variants
│   ├── cards.html               ← Card variants
│   ├── badges-pills.html        ← Badges, pills, status
│   ├── forms.html               ← Form inputs & selects
│   ├── stat-cards.html          ← Stat card components
│   ├── modals.html              ← Modal anatomy
│   ├── notifications.html       ← Toast & notification system
│   └── motion.html              ← Animation tokens
└── ui_kits/
    └── smartlogbook/
        ├── README.md
        ├── index.html           ← Interactive prototype
        ├── Components.jsx       ← Core UI components
        └── Screens.jsx          ← Screen-level compositions
```
