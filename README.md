# Budget Tracker - Visual Design & Styling

A clean, responsive, and visually accessible Budget Tracker user interface built as part of the Week 3 Visual Design Challenge. This phase focuses entirely on CSS enhancement without modifying existing HTML structure or adding JavaScript functionality.

---

## 🎨 Visual Design System

### 1. Color Palette
The application utilizes a cohesive, accessible color scheme based on a professional modern blue-and-slate palette:
- **Primary Brand Color (`#2563eb`):** Applied to the main title, section borders, button highlights, and table headers.
- **Background Slate (`#f8fafc`):** Serves as a neutral canvas to elevate card components.
- **Card Background (`#ffffff`):** Creates clear visual contrast for main content sections.
- **Primary Text (`#0f172a`):** High-contrast slate color for optimal legibility.
- **Muted Text (`#64748b`):** Used for form input labels to establish typographic hierarchy.

---

### 2. Custom Typography
Custom typography was implemented using **Google Fonts**:
- **Headings (`Poppins`):** A bold, geometric sans-serif font applied to `<h1>` and `<h2>` elements to create impactful headers.
- **Body & Inputs (`Inter`):** A neutral sans-serif font optimized for high readability across table cells, body text, form fields, and buttons.

---

### 3. CSS Box Model Implementation
To enhance visual organization, each core section is styled as an independent **Card Component**:
- **Margins (`margin-bottom: 1.5rem`):** Ensures consistent vertical spacing between sections.
- **Padding (`padding: 1.75rem`):** Creates breathing room inside container walls.
- **Borders & Border-Radius (`12px`):** Softens rectangular sections for a modern, approachable card interface.
- **Box Shadows:** Adds subtle elevation to separate sections visually from the page background.

---

### 4. Table & Form Design
- **Expense Form:** Features vertical stack layouts with prominent field labels, unified border styling, and focus-state outlines for accessibility.
- **Expense Table:** Includes explicit cell padding, distinct header styling using the primary brand color tint, horizontal grid borders, and alternating row backgrounds (`nth-child(even)`) for enhanced scanning clarity.

---

## 📁 Repository File Structure
```text
├── index.html   # Main HTML structure (Unchanged structure + Google Fonts link)
├── style.css    # Complete CSS design system stylesheet
└── README.md    # Documentation file