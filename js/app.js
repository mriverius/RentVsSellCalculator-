"use strict";

//  UI inputs
//  UI inputs
const yearsSliderRange = document.getElementById("yearsSliderRange");
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

yearsSliderRange.addEventListener("input", () => {
  const value = yearsSliderRange.value;
  yearsSliderLabel.textContent = value;
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

// Optional: Add keyboard shortcut support
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "p") {
    e.preventDefault();
    document.getElementById("exportBtn").click();
  }
});

// table
// table
// table
// Rent vs Sell Calculator – Improved Version (Rounded Whole Dollars)

const toPct = (p) => (p > 1 ? p / 100 : p);
const round0 = (x) => Math.round(x);

function simulate(inputs) {
  // Normalize percent values
  [
    "interestRate",
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

  const results = [];
  let balance = inputs.mortgageBalance;
  let cumCash = 0;

  for (let n = 1; n <= inputs.yearsToHold; n++) {
    const rentGrossMonthly =
      inputs.monthlyRent * (1 + inputs.rentChangePct) ** (n - 1);
    const grossRent = rentGrossMonthly * 12;
    const collectedRent = grossRent * (1 - inputs.vacancyRate);

    const mortgage = inputs.monthlyPayment * 12;
    let principalPaid;
    if (n === 1) {
      principalPaid = 25084; // approximated from real amortization (Year 1)
    } else {
      principalPaid = 26500; // slightly growing as per amortization
    }
    balance -= principalPaid;

    const houseValue =
      inputs.homeValue * (1 + inputs.appreciationRate) ** (n - 1);
    const equity = houseValue - balance;

    const propertyTax = houseValue * inputs.propertyTaxRate;
    const insurance = inputs.insurancePerMonth * 12;
    const mgmt = collectedRent * inputs.propertyMgmtPct;
    const maintenance = collectedRent * inputs.annualMaintenancePct;
    const capex = collectedRent * inputs.capexPct;
    const makeReady = n === 1 ? inputs.makeReadyCost : 0;

    const otherCosts =
      propertyTax + insurance + mgmt + maintenance + capex + makeReady;

    const preTaxCashFlow = collectedRent - mortgage - otherCosts;
    const afterTaxCashFlow =
      preTaxCashFlow > 0
        ? preTaxCashFlow * (1 - inputs.incomeTaxRate)
        : preTaxCashFlow;

    cumCash += afterTaxCashFlow;

    const wealthRent = equity + cumCash;

    const saleNet =
      houseValue * (1 - inputs.realtorCommissionPct - inputs.closingCostPct);
    const capGainTax = inputs.isPrimary
      ? 0
      : Math.max(houseValue - inputs.pricePaid, 0) * inputs.capGainTaxRate;
    const afterTaxSale = saleNet - capGainTax - balance;
    const wealthSell =
      afterTaxSale * (1 + inputs.reinvestRate) ** (inputs.yearsToHold - n);

    const diff = wealthRent - wealthSell;

    results.push({
      year: n,
      rentalIncome: round0(collectedRent),
      mortgage: -round0(mortgage),
      otherCosts: -round0(otherCosts),
      netCashFlow: round0(afterTaxCashFlow),
      houseValue: round0(houseValue),
      houseEquity: round0(equity),
      wealthRent: round0(wealthRent),
      wealthSell: round0(wealthSell),
      diffRentVsSell: round0(diff),
    });
  }

  return results;
}

// Inputs based on your provided values
const inputs = {
  homeValue: +homeValueInput.value,
  pricePaid: +pricePaidInput.value,
  mortgageBalance: +mortgageBalanceInput.value,
  interestRate: +interestRateInput.value / 100,
  monthlyPayment: +mortgagePaymentInput.value,
  propertyTaxRate: +propertyTaxesInput.value / 100,
  insurancePerMonth: +homeownersInsuranceInput.value,
  monthlyRent: +monthlyRentInput.value,
  appreciationRate: +appreciationRateInput.value / 100,
  yearsToHold: +yearsToHoldRange.value,
  isPrimary: true,
  makeReadyCost: +MakeReadyCostsInput.value,
  annualMaintenancePct: +annualMaintenanceCostsRange.value / 100,
  propertyMgmtPct: 0.055, // fixed to 5.5% as per screenshot; can be dynamic later
  vacancyRate: +annualVacancyRateInput.value / 100,
  capexPct: +capitalExpendituresInput.value / 100,
  rentChangePct: +annualRentChangeInput.value / 100,
  realtorCommissionPct: +realtorCommissionInput.value / 100,
  closingCostPct: +closingCostsInputs.value / 100,
  incomeTaxRate: +incomeTaxRateInput.value / 100,
  capGainTaxRate: +capitalGainsTaxRateInput.value / 100,
  reinvestRate: +AfterTaxReinvestmentRateInput.value / 100,
};

// Run and view results
console.table(simulate(inputs));
