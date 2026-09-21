// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// --- Step 1: Functions for Calculations ---

/**
 * Calculates total expenses by summing up individual cost categories.
 * @param {number} housing 
 * @param {number} food 
 * @param {number} transport 
 * @returns {number} Total expenses
 */
function calculateTotalExpenses(housing, food, transport) {
  return housing + food + transport;
}

/**
 * Calculates remaining balance after subtracting total expenses from total income.
 * @param {number} income 
 * @param {number} totalExpenses 
 * @returns {number} Remaining balance
 */
function calculateRemainingBalance(income, totalExpenses) {
  return income - totalExpenses;
}

/**
 * Formats a raw number into standard currency string format ($0.00).
 * @param {number} amount 
 * @returns {string} Formatted currency
 */
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// --- Step 2: Main Application Workflow ---

function runSpendWise() {
  console.log("==========================================");
  console.log("      SPENDWISE BUDGET SUMMARY            ");
  console.log("==========================================");

  // 1. Collect User Input via prompts (casting strings to floats)
  let monthlyIncome = parseFloat(prompt("Enter your total monthly income ($):")) || 0;
  let housingExpense = parseFloat(prompt("Enter your housing expenses (rent/mortgage) ($):")) || 0;
  let foodExpense = parseFloat(prompt("Enter your estimated food/groceries expenses ($):")) || 0;
  let transportExpense = parseFloat(prompt("Enter your transport/fuel expenses ($):")) || 0;

  // 2. Perform Budget Calculations using reusable functions
  let totalExpenses = calculateTotalExpenses(housingExpense, foodExpense, transportExpense);
  let remainingBalance = calculateRemainingBalance(monthlyIncome, totalExpenses);

  // 3. Display Results clearly in the browser console
  console.log("Monthly Income:     ", formatCurrency(monthlyIncome));
  console.log("------------------------------------------");
  console.log("Expenses Breakdown:");
  console.log("  - Housing:        ", formatCurrency(housingExpense));
  console.log("  - Food/Groceries: ", formatCurrency(foodExpense));
  console.log("  - Transport:      ", formatCurrency(transportExpense));
  console.log("------------------------------------------");
  console.log("Total Expenses:     ", formatCurrency(totalExpenses));
  console.log("Remaining Balance:  ", formatCurrency(remainingBalance));
  console.log("==========================================");

  // 4. Budget Health Assessment
  if (remainingBalance > 0) {
    console.log("Status: You are within budget! Consider saving your surplus.");
  } else if (remainingBalance === 0) {
    console.log("Status: You have broken even this month.");
  } else {
    console.log("Status: Warning! You are over budget by " + formatCurrency(Math.abs(remainingBalance)));
  }
}

// Run the budget tracker on page load
runSpendWise();