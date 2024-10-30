/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navbar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const addActiveClass = (section) => {
  section.classList.add("your-active-class");
};
const removeActiveClass = (section) => {
  if (section.classList.contains("your-active-class")) {
    section.classList.remove("your-active-class");
  }
};
const createNavLink = (section) => {
  const sectionID = section.id;
  const sectionText = section.dataset.nav;
  const link = `<a href="#${sectionID}" class="menu__link">${sectionText}</a>`;
  return link;
};
const handleLinkClick = (navItem, section) => {
  navItem.addEventListener("click", (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const main = () => {
  for (const section of sections) {
    const navItem = document.createElement("li");
    navItem.innerHTML = createNavLink(section);

    // handleLinkClick(navItem, section);
    navItem.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    navbar.appendChild(navItem);
    window.addEventListener("scroll", () => {
      const position = section.getBoundingClientRect();

      if (position.top <= 150 && position.top >= -150) {
        addActiveClass(section);
      } else {
        removeActiveClass(section);
      }
    });
  }
};
// Add class 'active' to section when near top of viewpor
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

main();

// Scroll to section on link click

// Set sections as active
