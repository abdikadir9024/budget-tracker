# Week 2 Budget Tracker Upgrade

## Project Description
This project is an upgraded version of the Week 1 Budget Tracker application. It enhances the structural layout using HTML5 semantic elements, adds structured tabular data display, upgrades form input controls, incorporates multimedia elements (images and embedded iframe video), and utilizes advanced CSS selectors for improved visual styling and interactivity.

---

## Summary of Technical Additions

### 1. Expense Table (`<table>`)
* Replaced placeholder text with a semantic table structure using `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`.
* Included 5 hardcoded sample rows displaying expense details (Name, Amount, Category, Date).
* Styled via CSS using `border-collapse: collapse`, cell padding, custom header colors, and zebra striping (`tr:nth-child(even)`).

### 2. Upgraded Form (`<form>`)
* Wrapped all input fields inside a `<form>` container.
* Replaced the text input for category with a `<select>` dropdown menu containing 5 options (*Food, Transport, Rent, Entertainment, Other*).
* Added explicit `id` attributes (`id="expense-name"`, `id="expense-amount"`, `id="expense-category"`, `id="expense-date"`) to all controls for future JavaScript binding.
* Added a submission control (`<button type="button">Add Expense</button>`).

### 3. Multimedia Integration
* **Header Icon:** Added an `<img>` tag with `src`, `alt`, and `width` attributes next to the main heading.
* **Video Player:** Embedded a YouTube video explaining budgeting techniques using an `<iframe>` container configured with height, width, title, and frame border properties.

### 4. Interactivity & Micro-Interactions
* **Collapsible Accordion:** Implemented `<details>` and `<summary>` tags to create an expandable "How to use this tracker" instruction guide.
* **Hover State:** Applied `:hover` rules on table rows (`tr:hover`) to provide visual feedback as users inspect row data.
* **Pointer State:** Configured `cursor: pointer` on form buttons and interactive summary elements.

### 5. Advanced CSS Selectors Applied
1. **Descendant Selector (`.expenses-section td`):** Applies targeted font sizes to table data cells located within the expenses container.
2. **Direct Child Selector (`.add-expense-section > h2`):** Targets only top-level section headers directly under the form section.
3. **Position Pseudo-class (`tbody tr:nth-child(even)` & `tbody tr:first-child`):** Applies alternating zebra background shades to even-numbered rows and highlights the primary entry.
4. **Negation Pseudo-class (`input:not([type="button"])`):** Applies background formatting to text, number, and date input elements while excluding buttons.
5. **Focus State Selector (`input:focus, select:focus`):** Adds a dynamic glow and border highlight when a user focuses on input or drop-down elements.

---

## Setup & Viewing Instructions
1. Clone this repository to your local machine.
2. Open `index.html` directly in any web browser (Chrome, Firefox, Edge, Safari).