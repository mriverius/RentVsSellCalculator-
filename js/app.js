"use strict";

//  UI inputs
//  UI inputs
const formInputs = document.getElementById("formInputs");
const yearsSliderRange = document.getElementById("yearsSliderRange");
const years_graphic_results = document.getElementById("years_graphic_results");
const summary_rent_out = document.getElementById("summary_rent_out");
const summary_sell_out = document.getElementById("summary_sell_out");
const summary_dif_wealth = document.getElementById("summary_dif_wealth");
const yearsSliderLabel = document.getElementById("yearsSliderLabel");
const btnExportPDF = document.getElementById("exportBtn");
const homeValueInput = document.getElementById("homeValueInput");
console.log(homeValueInput.value);
const pricePaidInput = document.getElementById("pricePaidInput");
console.log(pricePaidInput.value);
const originalMortgageInput = document.getElementById("originalMortgageInput");
console.log(originalMortgageInput.value);
const mortgageBalanceInput = document.getElementById("mortgageBalanceInput");
console.log(mortgageBalanceInput.value);
const interestRateInput = document.getElementById("interestRateInput");
console.log(interestRateInput.value);
const mortgagePaymentInput = document.getElementById("mortgagePaymentInput");
console.log(`Morrtgare payment/monthy ${mortgagePaymentInput.value}`);
const propertyTaxesInput = document.getElementById("propertyTaxesInput");
console.log(propertyTaxesInput.value);
const homeownersInsuranceInput = document.getElementById(
  "homeownersInsuranceInput"
);
console.log(homeownersInsuranceInput.value);
const monthlyRentInput = document.getElementById("monthlyRentInput");
console.log(monthlyRentInput.value);
const appreciationRateInput = document.getElementById("appreciationRateInput");
console.log(appreciationRateInput.value);
const yearsToHoldRange = document.getElementById("yearsToHoldRange");
console.log(`years hold ${yearsToHoldRange.value}`);
const yearsToHoldLabel = document.getElementById("yearsToHoldLabel");
const primaryResidenceCheckbox = document.getElementById(
  "primaryResidenceCheckbox"
);
// Advance inputs
// Advance inputs
const MakeReadyCostsInput = document.getElementById("MakeReadyCostsInput");
const annualMaintenanceCostsInput = document.getElementById(
  "annualMaintenanceCostsInput"
);
console.log(annualMaintenanceCostsInput.value);
const annualMaintenanceCostsRange = document.getElementById(
  "annualMaintenanceCostsRange"
);
const annualMaintenanceCostsLabel = document.getElementById(
  "annualMaintenanceCostsLabel"
);
const RefurbishingCostsSellInput = document.getElementById(
  "RefurbishingCostsSellInput"
);
console.log(RefurbishingCostsSellInput.value);
const btn30years = document.getElementById("btn30years");
const btn15years = document.getElementById("btn15years");
const btnCustom = document.getElementById("btnCustom");
const mortgageTermCustomInput = document.getElementById(
  "mortgageTermCustomInput"
);
console.log(mortgageTermCustomInput.value);
const propertyManagementFeeInput = document.getElementById(
  "propertyManagementFeeInput"
);
console.log(propertyManagementFeeInput.value);
const propertyManagementFeePercent = document.getElementById(
  "propertyManagementFeePercent"
);
console.log(`$ ${propertyManagementFeePercent.value}`);
const annualVacancyRateInput = document.getElementById(
  "annualVacancyRateInput"
);
console.log(annualVacancyRateInput.value);
const annualVacancyRateRange = document.getElementById(
  "annualVacancyRateRange"
);
const annualVacancyRateLabel = document.getElementById(
  "annualVacancyRateLabel"
);
const capitalExpendituresInput = document.getElementById(
  "capitalExpendituresInput"
);
console.log(capitalExpendituresInput.value);
const capitalExpendituresRange = document.getElementById(
  "capitalExpendituresRange"
);
const capitalExpendituresLabel = document.getElementById(
  "capitalExpendituresLabel"
);
const capitalExpendituresChecbox = document.getElementById(
  "capitalExpendituresChecbox"
);
const annualRentChangeInput = document.getElementById("annualRentChangeInput");
console.log(annualRentChangeInput.value);
const annualRentChangeRange = document.getElementById("annualRentChangeRange");
const annualRentChangeLabel = document.getElementById("annualRentChangeLabel");
const realtorCommissionInput = document.getElementById(
  "realtorCommissionInput"
);
console.log(realtorCommissionInput.value);
const realtorCommissionRange = document.getElementById(
  "realtorCommissionRange"
);
const realtorCommissionlabel = document.getElementById(
  "realtorCommissionlabel"
);
const closingCostsInputs = document.getElementById("closingCostsInputs");
console.log(closingCostsInputs.value);
const closingCostsRange = document.getElementById("closingCostsRange");
const closingCostsLabel = document.getElementById("closingCostsLabel");
const incomeTaxRateInput = document.getElementById("incomeTaxRateInput");
console.log(incomeTaxRateInput.value);
const incomeTaxRateRange = document.getElementById("incomeTaxRateRange");
const incomeTaxRateLabel = document.getElementById("incomeTaxRateLabel");
const capitalGainsTaxRateInput = document.getElementById(
  "capitalGainsTaxRateInput"
);
console.log(capitalGainsTaxRateInput.value);
const capitalGainsTaxRateRange = document.getElementById(
  "capitalGainsTaxRateRange"
);
const capitalGainsTaxRateLabel = document.getElementById(
  "capitalGainsTaxRateLabel"
);
const AfterTaxReinvestmentRateInput = document.getElementById(
  "AfterTaxReinvestmentRateInput"
);
console.log(AfterTaxReinvestmentRateInput.value);
const AfterTaxReinvestmentRateRange = document.getElementById(
  "AfterTaxReinvestmentRateRange"
);
const AfterTaxReinvestmentRateLabel = document.getElementById(
  "AfterTaxReinvestmentRateLabel"
);

// To diplay value of range in inputs
// To diplay value of range in inputs

formInputs.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Get all input values from the form
  const formInputValues = getInputsFromForm();
  
  // For debugging
  console.log("Form input values collected:", formInputValues);
  console.log("Monthly rent value:", formInputValues.monthlyRent);
  
  // Populate the table with these values
  populateTable(formInputValues);
});

yearsSliderRange.addEventListener("input", () => {
  const value = yearsSliderRange.value;
  yearsSliderLabel.textContent = value;
  console.log("yes");
  years_graphic_results.textContent = value;
});

yearsToHoldRange.addEventListener("input", () => {
  const value = yearsToHoldRange.value;
  yearsToHoldLabel.textContent = value;
});

annualMaintenanceCostsRange.addEventListener("input", () => {
  const value = annualMaintenanceCostsRange.value;
  annualMaintenanceCostsInput.value = value;
  annualMaintenanceCostsLabel.textContent = value;
});

annualVacancyRateRange.addEventListener("input", () => {
  const value = annualVacancyRateRange.value;
  annualVacancyRateInput.value = value;
  annualVacancyRateLabel.textContent = value;
});

capitalExpendituresRange.addEventListener("input", () => {
  const value = capitalExpendituresRange.value;
  capitalExpendituresInput.value = value;
  capitalExpendituresLabel.textContent = value;
});

annualRentChangeRange.addEventListener("input", () => {
  const value = annualRentChangeRange.value;
  annualRentChangeInput.value = value;
  annualRentChangeLabel.textContent = value;
});

realtorCommissionRange.addEventListener("input", () => {
  const value = realtorCommissionRange.value;
  realtorCommissionInput.value = value;
  realtorCommissionlabel.textContent = value;
});

closingCostsRange.addEventListener("input", () => {
  const value = closingCostsRange.value;
  closingCostsInputs.value = value;
  closingCostsLabel.textContent = value;
});

incomeTaxRateRange.addEventListener("input", () => {
  const value = incomeTaxRateRange.value;
  incomeTaxRateInput.value = value;
  incomeTaxRateLabel.textContent = value;
});

capitalGainsTaxRateRange.addEventListener("input", () => {
  const value = capitalGainsTaxRateRange.value;
  capitalGainsTaxRateInput.value = value;
  capitalGainsTaxRateLabel.textContent = value;
});

AfterTaxReinvestmentRateRange.addEventListener("input", () => {
  const value = AfterTaxReinvestmentRateRange.value;
  AfterTaxReinvestmentRateInput.value = value;
  AfterTaxReinvestmentRateLabel.textContent = value;
});

// Export to PDF
// Export to PDF
// Export to PDF

btnExportPDF.addEventListener("click", function () {
  try {
    // Optional: Add loading state
    this.textContent = "Preparing PDF...";
    this.disabled = true;

    // Store original title
    const originalTitle = document.title;

    // Set descriptive title
    document.title =
      "Rent vs Sell Analysis - " + new Date().toLocaleDateString();

    // Trigger print
    window.print();

    // Reset button and title
    setTimeout(() => {
      document.title = originalTitle;
      this.textContent = "Export as PDF";
      this.disabled = false;
    }, 1000);
  } catch (error) {
    console.error("Print error:", error);
    alert("Unable to open print dialog. Please try again.");

    // Reset button
    this.textContent = "Export as PDF";
    this.disabled = false;
  }
});

// Convert percent-like values to decimal (e.g. 6 → 0.06)
function toPct(p) {
  return p >= 1 ? p / 100 : p;
}
// Format numbers as rounded US dollar values (e.g. $12,345)
function formatDollar(value) {
  return "$" + Math.round(value).toLocaleString();
}

// Monthly rent in year n, applying annual growth
function monthlyRent(n, p) {
  // Make the function more robust by checking for different property names
  const growth = p.rentChangePct || p.rentGrowthPct || 0;
  const baseRent = p.monthlyRent || p.MonthlyRent || 0; // Try different casing
  
  return baseRent * (1 + growth) ** (n - 1); // no increase in year 1
}

// Annual gross rent (before vacancy)
function grossRent(n, p) {
  return 12 * monthlyRent(n, p);
}

// Annual collected rent (after vacancy rate)
function collectedRent(n, p) {
  // Make vacancy rate property name more robust
  const vacancyRate = p.vacancyRate || p.vacancyRatePct || 0;
  return grossRent(n, p) * (1 - vacancyRate);
}

// Compute mortgage interest and principal over one year (12 payments)
function amortizeYear(balance, { interestRate, monthlyPayment }) {
  let interest = 0,
    principal = 0;
  const r = interestRate / 12;
  for (let i = 0; i < 12; i++) {
    const interestPayment = balance * r;
    const principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;
    interest += interestPayment;
    principal += principalPayment;
  }
  return { balance, interest, principal };
}

function  otherCosts(n, p, houseVal) {
  // Make sure all values are numbers and provide defaults to prevent NaN
  const insurance = (p.insurancePerMonth || 0) * 12;
  
  // Property tax rate (use either propertyTaxRate or calculate from annualPropertyTaxes)
  const propertyTaxRate = p.propertyTaxRate || 
    ((p.annualPropertyTaxes && p.homeValue) ? p.annualPropertyTaxes / p.homeValue : 0.012);
  
  // Property tax should be based on original home value, not current appreciated value
  const propertyTax = (p.homeValue || 0) * propertyTaxRate;
  
  // Property management fee - either percentage or fixed amount
  let mgmt;
  if (p.propertyMgmtPct && p.propertyMgmtPct > 0) {
    // Use percentage of collected rent
    mgmt = collectedRent(n, p) * p.propertyMgmtPct;
  } else if (p.propertyManagementFee) {
    // Use fixed monthly fee specified in form
    mgmt = p.propertyManagementFee * 12;
  } else {
    // Default to industry standard of $100/month
    mgmt = 100 * 12;
  }
  
  // Maintenance as percentage of collected rent
  const maintenance = collectedRent(n, p) * (p.annualMaintenancePct || 0.01);
  
  // CapEx - default to 0 if not provided
  const capex = collectedRent(n, p) * (p.capexPct || 0);
  
  // Make-ready costs (only in year 1)
  const makeReady = n === 1 ? (p.makeReadyCost || 0) : 0;

  // Calculate total costs
  const total = insurance + propertyTax + mgmt + maintenance + capex + makeReady;

  // Only log minimal debugging info for the first year
  if (n === 1) {
    console.log("Other Costs Year 1:", Math.round(total));
  }

  return {
    total,
    breakdown: { insurance, propertyTax, mgmt, maintenance, capex, makeReady },
  };
}

// Main simulator: calculates rent vs sell logic over years
function simulate(inputs) {
  // Create a normalized copy of inputs to avoid naming convention issues
  const normalizedInputs = { ...inputs };
  
  // Handle different naming conventions
  normalizedInputs.rentChangePct = inputs.rentChangePct || inputs.rentGrowthPct || 0;
  normalizedInputs.vacancyRate = inputs.vacancyRate || inputs.vacancyRatePct || 0;
  normalizedInputs.propertyTaxRate = inputs.propertyTaxRate || (inputs.annualPropertyTaxes / inputs.homeValue) || 0;
  normalizedInputs.appreciationRate = inputs.appreciationRate || inputs.appreciationRatePct || 0;
  normalizedInputs.isPrimary = inputs.isPrimary || inputs.primaryResidence || false;
  normalizedInputs.incomeTaxRate = inputs.incomeTaxRate || inputs.incomeTaxPct || 0;
  normalizedInputs.capGainTaxRate = inputs.capGainTaxRate || inputs.capGainTaxPct || 0;
  normalizedInputs.reinvestRate = inputs.reinvestRate || inputs.reinvestRatePct || 0;
  
  // Convert percentage-style inputs to decimal if needed
  [
    "propertyTaxRate",
    "appreciationRate",
    "vacancyRate",
    "annualMaintenancePct",
    "capexPct",
    "rentChangePct",
    "propertyMgmtPct",
    "realtorCommissionPct",
    "closingCostPct",
    "incomeTaxRate",
    "capGainTaxRate",
    "reinvestRate",
  ].forEach((k) => {
    if (normalizedInputs[k] !== undefined) {
      normalizedInputs[k] = toPct(normalizedInputs[k]);
    }
  });

  const yrs = normalizedInputs.yearsToHold || inputs.yearsToHold;
  let bal = normalizedInputs.mortgageBalance || inputs.mortgageBalance;
  let cumCF = -(normalizedInputs.makeReadyCost || inputs.makeReadyCost || 0); // Deduct make-ready at start
  const rows = [];

  for (let n = 1; n <= yrs; n++) {
    // Use normalized inputs for all calculations to prevent NaN values
    const rent = collectedRent(n, normalizedInputs);
    
    // Make sure interestRate is defined before calling amortizeYear
    if (normalizedInputs.interestRate === undefined && inputs.interestRatePct !== undefined) {
      normalizedInputs.interestRate = toPct(inputs.interestRatePct);
    }
    
    // Ensure monthlyPayment is defined
    normalizedInputs.monthlyPayment = normalizedInputs.monthlyPayment || inputs.monthlyPayment;
    
    const { balance, principal, interest } = amortizeYear(bal, normalizedInputs);
    const mortgagePay = normalizedInputs.monthlyPayment * 12;
    bal = balance;
    
    const homeValue = normalizedInputs.homeValue || inputs.homeValue;
    const appreciationRate = normalizedInputs.appreciationRate || 0;
    const houseVal = homeValue * (1 + appreciationRate) ** (n - 1);
    
    // Make sure these properties exist for otherCosts
    normalizedInputs.insurancePerMonth = normalizedInputs.insurancePerMonth || 
      (inputs.annualInsurance ? inputs.annualInsurance / 12 : inputs.insurancePerMonth);
    
    const { total: oCost } = otherCosts(n, normalizedInputs, houseVal);

    const preTaxCF = rent - mortgagePay - oCost;

    // Taxable income calculation - subtract mortgage INTEREST (not total payment) and other costs
    const taxableIncome = rent - interest - oCost;

    // Calculate tax on taxable income only
    const tax = taxableIncome > 0 ? taxableIncome * normalizedInputs.incomeTaxRate : 0;

    // After-tax cash flow = pre-tax cash flow minus tax
    const afterTaxCF = preTaxCF - tax;

    cumCF += afterTaxCF;

    const equity = houseVal - bal;
    const wealthRent = equity + cumCF;

    // Make sure these values exist
    normalizedInputs.realtorCommissionPct = normalizedInputs.realtorCommissionPct || inputs.realtorCommissionPct || 0;
    normalizedInputs.closingCostPct = normalizedInputs.closingCostPct || inputs.closingCostPct || 0;
    normalizedInputs.pricePaid = normalizedInputs.pricePaid || inputs.pricePaid || homeValue;
    
    const saleNet =
      houseVal * (1 - normalizedInputs.realtorCommissionPct - normalizedInputs.closingCostPct);
    const capGainTax = normalizedInputs.isPrimary
      ? 0
      : Math.max(houseVal - normalizedInputs.pricePaid, 0) * normalizedInputs.capGainTaxRate;
    const afterTaxSale = saleNet - capGainTax - bal;
    const yrsToGrow = yrs - n;
    const wealthSell = afterTaxSale * (1 + normalizedInputs.reinvestRate) ** yrsToGrow;

    rows.push({
      Year: n,
      "Rental Income": formatDollar(rent),
      Mortgage: formatDollar(-mortgagePay),
      "Other Costs": formatDollar(-oCost),
      "Net Cash Flow": formatDollar(afterTaxCF),
      "House Value": formatDollar(houseVal),
      "House Equity": formatDollar(equity),
      "Wealth (Rent)": formatDollar(wealthRent),
      "Wealth (Sell)": formatDollar(wealthSell),
      Difference: formatDollar(wealthRent - wealthSell),
    });
  }

  console.table(rows);
  return rows;
}

// Example input
const inputs = {
  homeValue: 450000,
  pricePaid: 300000,
  originalMortgage: 250000,
  mortgageBalance: 200000,
  interestRate: 0.05, // % — will be converted
  monthlyPayment: 1342.05,
  propertyTaxRate: 0.016, // % — will be converted
  insurancePerMonth: 115,
  monthlyRent: 25000,
  appreciationRate: 0.035, // %
  yearsToHold: 10,
  isPrimary: true,
  makeReadyCost: 3000,
  annualMaintenancePct: 0.01, // %
  refurbishingCostPct: 0.01, // %
  mortgageTerm: 30, // Years
  propertyMgmtPct: 137,
  vacancyRate: 0.08, // %
  capexPct: 0.05, // %
  rentChangePct: 0.03, // %
  realtorCommissionPct: 0.06,
  closingCostPct: 0.03,
  incomeTaxRate: 0.1,
  capGainTaxRate: 0.15,
  reinvestRate: 0.06,
};

// Run the simulation and show the table
simulate(inputs);

function populateTable(inputs) {
  try {
    // Validate critical inputs
    if (!inputs.monthlyRent || isNaN(inputs.monthlyRent)) {
      console.error('Monthly rent is missing or invalid:', inputs.monthlyRent);
      alert('Please enter a valid Monthly Rent amount');
      return;
    }
    
    if (!inputs.homeValue || isNaN(inputs.homeValue)) {
      console.error('Home value is missing or invalid:', inputs.homeValue);
      alert('Please enter a valid Home Value');
      return;
    }

    // Call your simulate function to get the data
    const results = simulate(inputs);
    
    // Get the table body element
    const tbody = document.querySelector("table tbody");
    if (!tbody) {
      console.error('Table body not found in the DOM');
      return;
    }

    // Clear existing rows
    tbody.innerHTML = "";

    // Populate the table with results
    results.forEach((row) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${row.Year}</td>
        <td>${row["Rental Income"]}</td>
        <td>${row.Mortgage}</td>
        <td>${row["Other Costs"]}</td>
        <td>${row["Net Cash Flow"]}</td>
        <td>${row["House Value"]}</td>
        <td>${row["House Equity"]}</td>
        <td>${row["Wealth (Rent)"]}</td>
        <td>${row["Wealth (Sell)"]}</td>
        <td>${row.Difference}</td>
      `;

      tbody.appendChild(tr);
    });
    
    // Update summary fields if they exist
    const lastRow = results[results.length - 1];
    if (lastRow) {
      if (summary_rent_out) summary_rent_out.textContent = lastRow["Wealth (Rent)"];
      if (summary_sell_out) summary_sell_out.textContent = lastRow["Wealth (Sell)"];
      if (summary_dif_wealth) summary_dif_wealth.textContent = lastRow.Difference;
    }
  } catch (error) {
    console.error('Error populating table:', error);
    alert('An error occurred while calculating. Please check your inputs.');
  }
}

// Example usage with all required properties
const inputs2 = {
  // Basic property info
  homeValue: 450000,
  pricePaid: 400000,
  mortgageBalance: 224838,
  interestRate: 0.05,
  monthlyPayment: 1342,
  
  // Rental properties
  monthlyRent: 2500,  // Added this critical property for rental calculation
  rentChangePct: 0.03,
  vacancyRate: 0.08,
  
  // Expenses and costs
  makeReadyCost: 5000,
  propertyTaxRate: 0.016,
  insurancePerMonth: 115,
  annualMaintenancePct: 0.01,
  propertyMgmtPct: 0.055,
  capexPct: 0.05,
  
  // Sale-related
  appreciationRate: 0.035,
  yearsToHold: 10,
  isPrimary: true,
  realtorCommissionPct: 0.06,
  closingCostPct: 0.03,
  
  // Tax and investment
  incomeTaxRate: 0.25,
  capGainTaxRate: 0.15,
  reinvestRate: 0.06
};

// Add a calculate button event listener
document.getElementById('calculateBtn')?.addEventListener('click', function() {
  // Get all input values from the form
  const formInputValues = getInputsFromForm();
  
  // Populate the table with these values
  populateTable(formInputValues);
});

// Initialize with sample data to ensure the table has values on page load
populateTable(inputs2);

// Optionally add an event listener to update the calculations when the form is changed
// This will make the calculator more interactive
const formInputElements = document.querySelectorAll('#formInputs input, #formInputs select');
formInputElements.forEach(element => {
  element.addEventListener('change', function() {
    // Only auto-recalculate if the checkbox for that feature is enabled
    const autoCalculate = document.getElementById('autoCalculate');
    if (autoCalculate && autoCalculate.checked) {
      const formInputValues = getInputsFromForm();
      populateTable(formInputValues);
    }
  });
});

// Helper function to get all inputs from form
function getInputsFromForm() {
  // Property information
  const homeValue = parseFloat(homeValueInput.value) || 0;
  
  return {
    // Property information
    homeValue: homeValue,
    pricePaid: parseFloat(pricePaidInput.value) || homeValue, // Default to home value if not specified
    mortgageBalance: parseFloat(mortgageBalanceInput.value) || 0,
    interestRate: parseFloat(interestRateInput.value) / 100 || 0.05, // Convert from percentage
    monthlyPayment: parseFloat(mortgagePaymentInput.value) || 0,
    
    // Rental properties
    monthlyRent: parseFloat(monthlyRentInput.value) || 0,
    rentChangePct: parseFloat(annualRentChangeInput.value) / 100 || 0,
    vacancyRate: parseFloat(annualVacancyRateInput.value) / 100 || 0,
    
    // Expenses and costs
    makeReadyCost: parseFloat(RefurbishingCostsSellInput.value) || 0,
    propertyTaxRate: parseFloat(propertyTaxesInput.value) / 100 || 0,
    insurancePerMonth: parseFloat(homeownersInsuranceInput.value) || 0,
    annualMaintenancePct: parseFloat(annualMaintenanceCostsInput.value) / 100 || 0.01,
    propertyMgmtPct: parseFloat(propertyManagementFeeInput.value) / 100 || 0.055,
    capexPct: parseFloat(capitalExpendituresInput.value) / 100 || 0,
    
    // Sale-related
    appreciationRate: parseFloat(appreciationRateInput.value) / 100 || 0.03,
    yearsToHold: parseInt(yearsToHoldRange.value) || 10,
    isPrimary: primaryResidenceCheckbox ? primaryResidenceCheckbox.checked : true,
    realtorCommissionPct: parseFloat(realtorCommissionInput.value) / 100 || 0.06,
    closingCostPct: parseFloat(closingCostsInputs.value) / 100 || 0.03,
    
    // Tax and investment
    incomeTaxRate: parseFloat(incomeTaxRateInput.value) / 100 || 0.25,
    capGainTaxRate: parseFloat(capitalGainsTaxRateInput.value) / 100 || 0.15,
    reinvestRate: parseFloat(AfterTaxReinvestmentRateInput.value) / 100 || 0.06
  };
}

//
//
//
//
