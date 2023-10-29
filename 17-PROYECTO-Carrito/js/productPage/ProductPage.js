import { cart, CreateCourseItem, renderCart } from "../cart/Cart.js"

/**
 * Event listener for the 'DOMContentLoaded' event.
 * Initializes event listeners when the DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", function() {
  loadEventListeners();
})

/**
 * Initialize event listeners for click and mouseover events.
 */
function loadEventListeners() {
  document.addEventListener('click', (e) => {
    courseListClickHandler(e);
  })
  document.addEventListener('mouseover', (e) => {
    courseListMouseOverHandler(e);
  })
}

/**
 * Handle click events on course list items.
 * @param {Event} e - The click event object.
 */
function courseListClickHandler(e) {
  switch (e.target.className) {
    case "u-full-width button-primary button input agregar-carrito": {
      return addCourseToCart(e.target.parentElement);
    }
    case "button u-full-width": {
      cart.emptyCart();
      break;
    }
  }
}

/**
 * Handle mouseover events on course list items.
 * @param {Event} e - The mouseover event object.
 */
function courseListMouseOverHandler(e) {
  switch (e.target.className) {
    case "submenu": {
      renderCart(cart);
    }
  }
}

/**
 * Add a course to the shopping cart and display an alert.
 * @param {Element} infoCard - The course info card.
 */
function addCourseToCart(infoCard) {
  cart.addItem(CreateCourseItem.createCourseItem(infoCard));
  cart.storeItems();
  alert("Your item has been successfully added to the cart!");
}
