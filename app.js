// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // ===== TIER 3: DATA-DRIVEN PORTFOLIO (DATA) =====
  // We store our project data in an array of objects.
  // This makes it super easy to add, remove, or edit projects.
  const portfolioData = [
    {
      category: "web",
      imgSrc: "https://via.placeholder.com/400x300?text=Web+Project",
      alt: "Web Project",
    },
    {
      category: "logo",
      imgSrc: "https://via.placeholder.com/400x300?text=Logo+Design",
      alt: "Logo Design",
    },
    {
      category: "app",
      imgSrc: "https://via.placeholder.com/400x300?text=Mobile+App",
      alt: "Mobile App",
    },
    {
      category: "web",
      imgSrc: "https://via.placeholder.com/400x300?text=E-commerce",
      alt: "E-commerce Site",
    },
    {
      category: "app",
      imgSrc: "https://via.placeholder.com/400x300?text=Utility+App",
      alt: "Utility App",
    },
    {
      category: "logo",
      imgSrc: "https://via.placeholder.com/400x300?text=Brand+ID",
      alt: "Brand Identity",
    },
  ];

  const portfolioGrid = document.getElementById("portfolio-grid");
  const filterButtonsContainer = document.getElementById("filter-buttons");

  // ===== TIER 3: DYNAMICALLY GENERATE PORTFOLIO ITEMS & FILTERS =====
  // This function creates and inserts the portfolio items into the HTML.
  const populatePortfolio = () => {
    portfolioGrid.innerHTML = ""; // Clear existing items

    // Create a set of unique categories from the data
    const categories = [
      "all",
      ...new Set(portfolioData.map((item) => item.category)),
    ];

    // Generate filter buttons
    filterButtonsContainer.innerHTML = categories
      .map(
        (category) =>
          `<button data-filter="${category}" class="filter-btn px-4 py-2 rounded-md capitalize">${category}</button>`
      )
      .join("");

    // Generate portfolio items
    portfolioData.forEach((item) => {
      const portfolioItem = document.createElement("div");
      portfolioItem.className = "portfolio-item cursor-pointer group";
      portfolioItem.setAttribute("data-category", item.category);

      portfolioItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.alt}" class="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
            `;
      portfolioGrid.appendChild(portfolioItem);
    });
  };

  // ===== TIER 1 & TIER 2: INITIALIZE ALL FEATURES =====
  // A main function to set up all event listeners after the content is created.
  const initializeFeatures = () => {
    // --- Feature: Filterable Gallery ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    document
      .querySelector('.filter-btn[data-filter="all"]')
      .classList.add("active"); // Set 'All' as active initially

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        portfolioItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          item.style.display =
            filter === "all" || filter === category ? "block" : "none";
        });
      });
    });

    // --- Tier 2 Feature: Image Lightbox ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    portfolioItems.forEach((item) => {
      item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        lightboxImg.src = imgSrc;
        lightbox.classList.remove("hidden");
      });
    });

    const closeLightbox = () => lightbox.classList.add("hidden");
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      // Close when clicking the background
      if (e.target === lightbox) closeLightbox();
    });
  };

  // ===== TIER 2: TYPING EFFECT =====
  const typingTextElement = document.getElementById("typing-text");
  const textToType = "Creative Web Developer";
  let charIndex = 0;

  function typeEffect() {
    if (charIndex < textToType.length) {
      typingTextElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100); // Speed of typing
    }
  }

  // ===== TIER 3: LIGHT/DARK MODE TOGGLE =====
  const themeToggleBtns = [
    document.getElementById("theme-toggle-btn"),
    document.getElementById("theme-toggle-btn-mobile"),
  ];
  const lightIcon = document.getElementById("theme-icon-light");
  const darkIcon = document.getElementById("theme-icon-dark");

  const updateThemeIcons = (isDark) => {
    if (isDark) {
      lightIcon.classList.add("hidden");
      darkIcon.classList.remove("hidden");
    } else {
      lightIcon.classList.remove("hidden");
      darkIcon.classList.add("hidden");
    }
  };

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light"); // Save preference
    updateThemeIcons(isDarkMode);
  };

  // Check local storage for saved theme on page load
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove("dark");
    updateThemeIcons(false);
  }

  themeToggleBtns.forEach((btn) => btn.addEventListener("click", toggleTheme));

  // ===== TIER 1: OTHER FEATURES (UNCHANGED) =====
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburgerBtn.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden")
  );

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  scrollToTopBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
      if (!mobileMenu.classList.contains("hidden"))
        mobileMenu.classList.add("hidden");
    });
  });

  // ===== EXECUTION =====
  // First, create the dynamic content.
  populatePortfolio();
  // Then, initialize all features that depend on that content.
  initializeFeatures();
  // Start the typing effect.
  typeEffect();
});
