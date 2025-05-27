// Event listener for the Export as PDF button
document.getElementById("exportBtn").addEventListener("click", function () {
  // Store original title
  const originalTitle = document.title;

  // Set a descriptive title for the PDF
  document.title =
    "Rent vs Sell Calculator Results - " + new Date().toLocaleDateString();

  // Trigger print dialog (user can save as PDF)
  window.print();

  // Restore original title after a brief delay
  setTimeout(() => {
    document.title = originalTitle;
  }, 100);
});

// Alternative: More comprehensive version with error handling
// document.getElementById("exportBtn").addEventListener("click", function () {
//   try {
//     // Optional: Add loading state
//     this.textContent = "Preparing PDF...";
//     this.disabled = true;

//     // Store original title
//     const originalTitle = document.title;

//     // Set descriptive title
//     document.title =
//       "Rent vs Sell Analysis - " + new Date().toLocaleDateString();

//     // Trigger print
//     window.print();

//     // Reset button and title
//     setTimeout(() => {
//       document.title = originalTitle;
//       this.textContent = "Export as PDF";
//       this.disabled = false;
//     }, 1000);
//   } catch (error) {
//     console.error("Print error:", error);
//     alert("Unable to open print dialog. Please try again.");

//     // Reset button
//     this.textContent = "Export as PDF";
//     this.disabled = false;
//   }
// });

// Optional: Add keyboard shortcut support
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "p") {
    e.preventDefault();
    document.getElementById("exportBtn").click();
  }
});

document.getElementById("inputs").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents form submission and page refresh
});
