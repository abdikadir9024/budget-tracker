# SpendWise Dashboard Shell

SpendWise is a responsive, modern personal finance dashboard layout engineered using CSS Grid, Flexbox, and CSS Custom Properties.

## Overview & Architecture

This repository contains the visual foundation for the SpendWise dashboard capstone project. The project is designed with a mobile-first component structure and pure CSS positioning without absolute positioning.

### Features & Implementation Details

#### 1. Page Layout (CSS Grid)
* The overall grid layout is defined in `.dashboard-container` with explicit areas: `sidebar`, `header`, and `main`.
* The grid uses a column split of `260px` for the fixed sidebar and `1fr` for fluid main content.

#### 2. Flexbox Component Structure
* **Sidebar:** Uses vertical flexbox layout (`flex-direction: column`) with `justify-content: space-between` to stick user profile information to the bottom.
* **Header:** Uses horizontal flexbox to align title metadata on the left and utility controls (search bar, notification trigger) on the right.
* **Dashboard Cards:** The main content container leverages `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` for automated multi-column arrangements. Each individual card internally uses Flexbox to align icons, budget limits, amounts, and progress indicators.

#### 3. CSS Custom Properties (Design Tokens)
All global color schemes, shadows, and radii are declared under `:root`:
* `--brand-color`: Primary visual indicator (`#4f46e5`)
* `--accent-color`: Goal tracking indicator (`#10b981`)
* `--surface-color` & `--bg-color`: Structural contrast elements
* `--text-primary` & `--text-secondary`: High and medium contrast text standards

#### 4. Responsive Single-Column Adaptation
* Uses `@media (max-width: 768px)` to reconfigure the grid into a single-column sequence (`header` → `sidebar` → `main`).
* Converts navigation options into a horizontal scrolling row for compact touchscreen viewports.

#### 5. Card Micro-interactions
* Hover and keyboard focus state animations (`.card:hover, .card:focus-visible`) use transform translate (`translateY(-4px)`) and shadow elevations.
* Transition duration is locked to `200ms` (satisfying the ≤250ms requirement).
* Focus rings are enabled via CSS `:focus-visible` for keyboard navigation accessibility.

#### 6. Dark Theme Support (Stretch Goal)
* Implemented using `@media (prefers-color-scheme: dark)`.
* Color variables on `:root` are dynamically remapped for dark viewports automatically without JavaScript toggling.

---

## File Structure

```text
.
├── index.html   # Semantic HTML5 document structure
├── style.css    # Custom CSS Grid/Flexbox stylesheet & design tokens
└── README.md    # Documentation and system breakdown