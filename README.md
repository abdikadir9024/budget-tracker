# SpendWise - JavaScript Foundation

SpendWise is a personal budget and expense tracking application designed to help users process income and expenditure data to manage their financial health.

## Features
- **User Input Collection**: Interactively gathers income and expenditure figures using browser prompts.
- **Budget Calculations**: Automatically calculates total expenditures and determines the remaining balance.
- **Formatted Summary**: Outputs an itemized, readable financial summary directly to the browser console.

## JavaScript Concepts Implemented

### 1. Variables
- `let` variables store dynamic values such as `monthlyIncome`, `housingExpense`, `foodExpense`, and `transportExpense`.
- Calculated outputs (`totalExpenses`, `remainingBalance`) are saved in variables before being logged.

### 2. User Input Collection
- `prompt()` functions capture input directly from the user.
- `parseFloat()` converts string inputs from `prompt()` into numeric values for calculation.
- Fallback operators (`|| 0`) prevent NaN errors if a user leaves a prompt empty.

### 3. Calculations & Operators
- Addition (`+`) sums up all categorical expenses.
- Subtraction (`-`) computes remaining balance (`income - totalExpenses`).

### 4. Reusable Functions
- `calculateTotalExpenses()`: Encapsulates expense summation logic.
- `calculateRemainingBalance()`: Encapsulates income minus expense logic.
- `formatCurrency()`: Converts raw numbers into structured string currency formats.
- `runSpendWise()`: Manages the application workflow execution.

---

## How to Run
1. Clone this repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Complete the interactive prompts that pop up on launch.
4. Open the Developer Tools (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`) and navigate to the **Console** tab to view your full summary.