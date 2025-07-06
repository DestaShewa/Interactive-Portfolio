// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  /**
   * Sets up the portfolio filtering and lightbox functionality.
   * It finds the elements in your HTML and makes them interactive.
   */
  function setupPortfolio() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    // --- Filter Logic ---
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // Update active class on buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Show/hide portfolio items
        portfolioItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          if (filter === "all" || filter === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });

    // --- Lightbox Logic ---
    portfolioItems.forEach((item) => {
      item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        lightboxImg.src = imgSrc;
        lightbox.classList.remove("hidden");
      });
    });

    // Close lightbox
    const closeLightbox = () => lightbox.classList.add("hidden");
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /**
   * Starts the typing animation in the hero section.
   */
  function startTypingEffect() {
    const textToType = "Creative Web Developer"; // You can change this text
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;

    function type() {
      if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      }
    }
    type();
  }

  /**
   * Sets up all other event listeners for the page (nav, scroll, theme).
   */
  function setupEventListeners() {
    // Mobile Menu
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    hamburgerBtn.addEventListener("click", () =>
      mobileMenu.classList.toggle("hidden")
    );

    // Theme Toggle
    const themeToggleBtns = [
      document.getElementById("theme-toggle-btn"),
      document.getElementById("theme-toggle-btn-mobile"),
    ];
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
    themeToggleBtns.forEach((btn) =>
      btn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.theme = document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";
      })
    );

    // Scroll-to-Top
    const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
    window.addEventListener("scroll", () => {
      scrollToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });
    scrollToTopBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );

    // Smooth Scrolling Nav Links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        if (!mobileMenu.classList.contains("hidden"))
          mobileMenu.classList.add("hidden");
      });
    });
  }

  // ===== EXECUTION: Run all the setup functions =====
  setupPortfolio();
  startTypingEffect();
  setupEventListeners();
});
