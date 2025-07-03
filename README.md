# Interactive-Portfolio
# My Interactive Freelancer Portfolio

![Portfolio Screenshot Light](https://via.placeholder.com/800x450?text=Light+Mode+Screenshot)
![Portfolio Screenshot Dark](https://via.placeholder.com/800x450?text=Dark+Mode+Screenshot)
*(Suggestion: Replace the placeholder links above with actual screenshots of your finished project)*

This is a modern, single-page portfolio website built from scratch to showcase my skills in front-end web development. It is fully responsive, interactive, and demonstrates proficiency with core web technologies.

**Live Demo:** [your-portfolio-link.com](https://your-portfolio-link.com) *(Replace with your live URL once deployed)*

---

## ✨ Features

This project is packed with features designed to create a professional and engaging user experience.

*   **Responsive Design:** Looks great on all devices, from mobile phones to desktop monitors.
*   **Light & Dark Mode:** A theme toggle that allows users to switch between light and dark themes. The user's preference is automatically saved in their browser for future visits.
*   **Interactive Portfolio Gallery:** A filterable gallery that allows visitors to sort projects by category (e.g., Web, App, Logo).
*   **Data-Driven Content:** Portfolio items are generated dynamically from a JavaScript array, making the project clean, scalable, and easy to update.
*   **Image Lightbox:** Clicking on a portfolio image opens a larger view in a modal window.
*   **Animated "Typing" Effect:** A dynamic typing animation in the hero section for a modern, eye-catching introduction.
*   **Smooth Scrolling:** Navigation links provide a smooth scrolling experience to different sections of the page.
*   **"Scroll to Top" Button:** A convenient button that appears on long scrolls to take the user back to the top of the page.
*   **Mobile Hamburger Menu:** A fully functional and accessible navigation menu for smaller screens.

---

## 🛠️ Technologies Used

This project was built using only fundamental web technologies, with no complex frameworks or build tools required.

*   **HTML5:** For the core structure and content of the website. Semantic HTML tags were used for better accessibility and SEO.
*   **Tailwind CSS (via CDN):** A utility-first CSS framework for rapidly building a custom, responsive design without writing custom CSS. Dark mode is implemented using Tailwind's `dark:` variant.
*   **JavaScript (ES6+):** For all the interactivity and dynamic content generation. Key JS features used include:
    *   DOM Manipulation (creating elements, adding/removing classes)
    *   Event Listeners (`click`, `scroll`)
    *   Array Methods (`forEach`, `map`, `new Set`)
    *   `localStorage` for saving the theme preference
    *   Asynchronous functions like `setTimeout` for animations.

---

## 🚀 Getting Started

No complex installation or build steps are required to run this project locally.

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge).

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Open the `index.html` file:**
    Simply open the `index.html` file directly in your web browser. That's it!

---

## 🔧 How to Customize

This project is designed to be easily customized.

### Adding or Changing Projects

The portfolio is data-driven, which makes it incredibly simple to update.

1.  Open the `app.js` file.
2.  Find the `portfolioData` array near the top of the file.
3.  To add a new project, simply add a new object to the array:

    ```javascript
    const portfolioData = [
        // ... existing projects
        { category: 'web', imgSrc: 'path/to/your/new-image.jpg', alt: 'Description of New Project' },
    ];
    ```

4.  To change a project, just edit the `category`, `imgSrc`, or `alt` text of an existing object. The website will update automatically.

### Changing the "Typing" Text

1.  Open the `app.js` file.
2.  Locate the `textToType` constant within the "TYPING EFFECT" section.
3.  Change the string to whatever you want your title to be.

    ```javascript
    const textToType = "Your New Awesome Title";
    ```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
