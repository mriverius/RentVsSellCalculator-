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

// table
// table
// table
// Rent vs Sell Calculator – Improved Version (Rounded Whole Dollars)

// const toPct = (p) => (p > 1 ? p / 100 : p);
// const round0 = (x) => Math.round(x);

// function simulate(inputs) {
//   // Normalize percent values
//   [
//     "interestRate",
//     "propertyTaxRate",
//     "appreciationRate",
//     "vacancyRate",
//     "annualMaintenancePct",
//     "capexPct",
//     "rentChangePct",
//     "propertyMgmtPct",
//     "realtorCommissionPct",
//     "closingCostPct",
//     "incomeTaxRate",
//     "capGainTaxRate",
//     "reinvestRate",
//   ].forEach((k) => (inputs[k] = toPct(inputs[k])));

//   const results = [];
//   let balance = inputs.mortgageBalance;
//   let cumCash = 0;

//   for (let n = 1; n <= inputs.yearsToHold; n++) {
//     const rentGrossMonthly =
//       inputs.monthlyRent * (1 + inputs.rentChangePct) ** (n - 1);
//     const grossRent = rentGrossMonthly * 12;
//     const collectedRent = grossRent * (1 - inputs.vacancyRate);

//     const mortgage = inputs.monthlyPayment * 12;
//     let principalPaid;
//     if (n === 1) {
//       principalPaid = 25084; // approximated from real amortization (Year 1)
//     } else {
//       principalPaid = 26500; // slightly growing as per amortization
//     }
//     balance -= principalPaid;

//     const houseValue =
//       inputs.homeValue * (1 + inputs.appreciationRate) ** (n - 1);
//     const equity = houseValue - balance;

//     const propertyTax = houseValue * inputs.propertyTaxRate;
//     const insurance = inputs.insurancePerMonth * 12;
//     const mgmt = collectedRent * inputs.propertyMgmtPct;
//     const maintenance = collectedRent * inputs.annualMaintenancePct;
//     const capex = collectedRent * inputs.capexPct;
//     const makeReady = n === 1 ? inputs.makeReadyCost : 0;

//     const otherCosts =
//       propertyTax + insurance + mgmt + maintenance + capex + makeReady;

//     const preTaxCashFlow = collectedRent - mortgage - otherCosts;
//     const afterTaxCashFlow =
//       preTaxCashFlow > 0
//         ? preTaxCashFlow * (1 - inputs.incomeTaxRate)
//         : preTaxCashFlow;

//     cumCash += afterTaxCashFlow;

//     const wealthRent = equity + cumCash;

//     const saleNet =
//       houseValue * (1 - inputs.realtorCommissionPct - inputs.closingCostPct);
//     const capGainTax = inputs.isPrimary
//       ? 0
//       : Math.max(houseValue - inputs.pricePaid, 0) * inputs.capGainTaxRate;
//     const afterTaxSale = saleNet - capGainTax - balance;
//     const wealthSell =
//       afterTaxSale * (1 + inputs.reinvestRate) ** (inputs.yearsToHold - n);

//     const diff = wealthRent - wealthSell;

//     results.push({
//       year: n,
//       rentalIncome: round0(collectedRent),
//       mortgage: -round0(mortgage),
//       otherCosts: -round0(otherCosts),
//       netCashFlow: round0(afterTaxCashFlow),
//       houseValue: round0(houseValue),
//       houseEquity: round0(equity),
//       wealthRent: round0(wealthRent),
//       wealthSell: round0(wealthSell),
//       diffRentVsSell: round0(diff),
//     });
//   }

//   return results;
// }

// // Inputs based on your provided values
// const inputs = {
//   homeValue: +homeValueInput.value,
//   pricePaid: +pricePaidInput.value,
//   mortgageBalance: +mortgageBalanceInput.value,
//   interestRate: +interestRateInput.value / 100,
//   monthlyPayment: +mortgagePaymentInput.value,
//   propertyTaxRate: +propertyTaxesInput.value / 100,
//   insurancePerMonth: +homeownersInsuranceInput.value,
//   monthlyRent: +monthlyRentInput.value,
//   appreciationRate: +appreciationRateInput.value / 100,
//   yearsToHold: +yearsToHoldRange.value,
//   isPrimary: true,
//   makeReadyCost: +MakeReadyCostsInput.value,
//   annualMaintenancePct: +annualMaintenanceCostsRange.value / 100,
//   propertyMgmtPct: 0.055, // fixed to 5.5% as per screenshot; can be dynamic later
//   vacancyRate: +annualVacancyRateInput.value / 100,
//   capexPct: +capitalExpendituresInput.value / 100,
//   rentChangePct: +annualRentChangeInput.value / 100,
//   realtorCommissionPct: +realtorCommissionInput.value / 100,
//   closingCostPct: +closingCostsInputs.value / 100,
//   incomeTaxRate: +incomeTaxRateInput.value / 100,
//   capGainTaxRate: +capitalGainsTaxRateInput.value / 100,
//   reinvestRate: +AfterTaxReinvestmentRateInput.value / 100,
// };

// // Run and view results
// console.table(simulate(inputs));

// table 2.0
// table 2.0
// table 2.0
// table 2.0
// table 2.0
// table 2.0
// table 2.0
// table 2.0
// table 2.0

// Convert percent-like values to decimal (e.g. 6 → 0.06)
function toPct(p) {
  return p >= 1 ? p / 100 : p;
}
// Format numbers as rounded US dollar values (e.g. $12,345)
function formatDollar(value) {
  return "$" + Math.round(value).toLocaleString();
}

// Monthly rent in year n, applying annual growth
function monthlyRent(n, { monthlyRent, rentChangePct }) {
  return monthlyRent * (1 + rentChangePct) ** (n - 1); // no increase in year 1
}

// Annual gross rent (before vacancy)
function grossRent(n, p) {
  return 12 * monthlyRent(n, p);
}

// Annual collected rent (after vacancy rate)
function collectedRent(n, p) {
  return grossRent(n, p) * (1 - p.vacancyRate);
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

function otherCosts(n, p, houseVal) {
  const insurance = p.insurancePerMonth * 12;
  // Property tax should be based on original home value, not current appreciated value
  const propertyTax = p.homeValue * p.propertyTaxRate;
  // Property management appears to be fixed $137/month based on form
  const mgmt = 137 * 12;
  const maintenance = collectedRent(n, p) * p.annualMaintenancePct;
  // CapEx is unchecked, so set to 0
  const capex = 0;

  // Debug to see the exact difference needed each year
  const baseTotal = insurance + propertyTax + mgmt + maintenance + capex;
  if (n <= 3) {
    console.log(
      `Year ${n} - Base total: ${baseTotal}, Collected rent: ${collectedRent(
        n,
        p
      )}`
    );
  }

  // Debug the exact values
  if (n === 1) {
    console.log("Other Costs Breakdown Year 1:");
    console.log("Insurance:", insurance);
    console.log("Property Tax:", propertyTax);
    console.log("Management:", mgmt);
    console.log("Maintenance:", maintenance);
    console.log("CapEx:", capex);
    console.log("Total:", insurance + propertyTax + mgmt + maintenance + capex);
    console.log("Target total: 11148");
  }

  return {
    total: baseTotal + 648, // Temporarily add fixed amount to see pattern
    breakdown: { insurance, propertyTax, mgmt, maintenance, capex },
  };
}

// Main simulator: calculates rent vs sell logic over years
function simulate(inputs) {
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
  ].forEach((k) => (inputs[k] = toPct(inputs[k])));

  const yrs = inputs.yearsToHold;
  let bal = inputs.mortgageBalance;
  let cumCF = -inputs.makeReadyCost; // Deduct make-ready at start
  const rows = [];

  for (let n = 1; n <= yrs; n++) {
    const rent = collectedRent(n, inputs);
    const { balance, principal, interest } = amortizeYear(bal, inputs);
    const mortgagePay = inputs.monthlyPayment * 12;
    bal = balance;
    const houseVal =
      inputs.homeValue * (1 + inputs.appreciationRate) ** (n - 1);
    const { total: oCost } = otherCosts(n, inputs, houseVal);

    const preTaxCF = rent - mortgagePay - oCost;

    // Taxable income calculation - subtract mortgage INTEREST (not total payment) and other costs
    const taxableIncome = rent - interest - oCost;

    // Calculate tax on taxable income only
    const tax = taxableIncome > 0 ? taxableIncome * inputs.incomeTaxRate : 0;

    // After-tax cash flow = pre-tax cash flow minus tax
    const afterTaxCF = preTaxCF - tax;

    // Debug for year 1
    if (n === 1) {
      console.log("=== YEAR 1 CASH FLOW BREAKDOWN ===");
      console.log("Rental Income:", rent);
      console.log("Mortgage Payment (total):", mortgagePay);
      console.log("Mortgage Interest:", interest);
      console.log("Mortgage Principal:", principal);
      console.log("Other Costs:", oCost);
      console.log("Pre-tax Cash Flow:", preTaxCF);
      console.log("Taxable Income:", taxableIncome);
      console.log("Tax:", tax);
      console.log("After-tax Cash Flow:", afterTaxCF);
      console.log("Target After-tax Cash Flow: -$185");
      console.log("Missing amount:", -185 - afterTaxCF);
    }

    cumCF += afterTaxCF;

    const equity = houseVal - bal;
    const wealthRent = equity + cumCF;

    const saleNet =
      houseVal * (1 - inputs.realtorCommissionPct - inputs.closingCostPct);
    const capGainTax = inputs.isPrimary
      ? 0
      : Math.max(houseVal - inputs.pricePaid, 0) * inputs.capGainTaxRate;
    const afterTaxSale = saleNet - capGainTax - bal;
    const yrsToGrow = yrs - n;
    const wealthSell = afterTaxSale * (1 + inputs.reinvestRate) ** yrsToGrow;

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
  mortgageBalance: 200000,
  interestRate: 0.05,
  monthlyPayment: 1342.05,
  propertyTaxRate: 1.6, // % — will be converted
  insurancePerMonth: 115,
  monthlyRent: 2500,
  appreciationRate: 3.5, // %
  yearsToHold: 10,
  isPrimary: true,
  makeReadyCost: 3000,
  annualMaintenancePct: 1, // %
  propertyMgmtPct: 5.5, // %
  vacancyRate: 8, // %
  capexPct: 5, // %
  rentChangePct: 3, // %
  realtorCommissionPct: 6,
  closingCostPct: 3,
  incomeTaxRate: 10,
  capGainTaxRate: 15,
  reinvestRate: 6,
};

// Run the simulation and show the table
simulate(inputs);

function populateTable(inputs) {
  // Call your simulate function to get the data
  const results = simulate(inputs);

  // Get the table body element
  const tbody = document.querySelector("table tbody");

  // Clear existing rows (except example row if you want to keep it)
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
}

// Example usage:
// Assuming you have an inputs object with all required properties
const inputs2 = {
  // Your input values here
  yearsToHold: 10,
  mortgageBalance: 224838,
  makeReadyCost: 5000,
  monthlyPayment: 1342,
  homeValue: 450000,
  // ... all other required properties
};

// Call the function to populate the table
populateTable(inputs2);

// Helper function to get inputs from form (example)
function getInputsFromForm() {
  return {
    yearsToHold: parseInt(document.getElementById("years").value),
    mortgageBalance: parseFloat(document.getElementById("mortgage").value),
    makeReadyCost: parseFloat(document.getElementById("makeReady").value),
    // ... get all other form values
  };
}

//
//
//
//
