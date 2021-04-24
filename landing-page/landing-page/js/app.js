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
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section"); //sections var
const navigation = document.querySelector("#navbar__list"); //navigation var

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const fragment = document.createDocumentFragment(); // using a DocumentFragment to speed up performance

for (const section of sections) {
  const navigationUl = document.createElement("li");
  navigationUl.innerHTML = `<a class="menu__link ${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`; //section.dataset.nav extracts the data-nav attribute

  fragment.appendChild(navigationUl);
}

navigation.appendChild(fragment);
// Add class 'active' to section when near top of viewport
function makeActiv() {
  for (let sec of sections) {
    let box = sec.getBoundingClientRect(); // get coordinates of each section element
    let link = sec.id;
    let uLink = document.querySelector(`.${link}`);

    if (box.top <= 150 && box.bottom >= 150) {
      sec.classList.add("your-active-class");
      uLink.classList.add("active");
    } else {
      sec.classList.remove("your-active-class");
      uLink.classList.remove("active");
    }
  }
}
document.addEventListener("scroll", function () {
  makeActiv();
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
navigation.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "A") {
    evt.preventDefault();
    const targetId = evt.target.getAttribute("href"); //extract href atribute of the target element
    window.scrollTo({
      top: document.querySelector(targetId).offsetTop, //offsetTop property gets the y- coordinate
      behavior: "smooth",
    });
  }
});
// Set sections as active
