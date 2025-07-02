// app.js

// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // 1. Select all the elements we need to work with
  const filterButtons = document.querySelectorAll(
    "#filter-buttons .filter-btn"
  );
  const portfolioItems = document.querySelectorAll(
    "#portfolio-grid .portfolio-item"
  );

  // 2. Add a click event listener to EACH filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the filter value from the clicked button's data-filter attribute
      const filter = button.getAttribute("data-filter");

      // --- Logic for the buttons ---
      // First, remove the 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Then, add the 'active' class to the one that was just clicked
      button.classList.add("active");

      // --- Logic for the portfolio items ---
      // Loop through each portfolio item
      portfolioItems.forEach((item) => {
        // Get the category of the item from its data-category attribute
        const category = item.getAttribute("data-category");

        // Check if the item should be shown
        if (filter === "all" || filter === category) {
          item.classList.remove("hidden"); // Show the item
        } else {
          item.classList.add("hidden"); // Hide the item
        }
      });
    });
  });

  // Optional: Set the "All" button to be active by default on page load
  document
    .querySelector('.filter-btn[data-filter="all"]')
    .classList.add("active");
});
