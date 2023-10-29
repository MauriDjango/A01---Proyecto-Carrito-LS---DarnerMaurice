/**
 * Represents a shopping cart.
 */
class Cart {
  _items = {};

  /**
   * Adds one or more items to the cart.
   * @param {...Object} args - One or more item objects to add to the cart.
   */
  addItem(...args) {
    for (const element of args) {
      if (element.name in this._items) {
        this._items[element.name].quantity++;
      } else {
        this._items[element.name] = { itemInfo: element, quantity: 1 };
      }
    }
  }

  /**
   * Retrieves the items currently in the cart.
   * @returns {Object} - An object containing the items in the cart.
   */
  getItems() {
    return this._items;
  }

  /**
   * Stores the cart items in the local storage.
   */
  storeItems() {
    localStorage.setItem('items', JSON.stringify(this._items));
  }

  /**
   * Retrieves the stored cart items from the local storage.
   * @returns {Object} - An object containing the stored cart items.
   */
  getStoredItems() {
    return JSON.parse(localStorage.getItem('items'));
  }

  /**
   * Empties the cart and removes stored items from local storage.
   */
  emptyCart() {
    this._items = {};
    localStorage.removeItem('items');
    renderCart(cart);
  }
}

/**
 * Renders the cart items on the web page.
 * @param {Cart} cart - The shopping cart to render.
 */
export function renderCart(cart) {
  const cartTableBody = document.getElementById("cart-table-body");
  cartTableBody.innerHTML = ''; // Clear the existing content

  const items = cart.getStoredItems();

  for (let item in items) {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td><img src="${items[item].itemInfo.image}" alt="Course Image" class="cart-image"></td>
      <td>${items[item].itemInfo.name}</td>
      <td>${items[item].itemInfo.price}</td>
      <td>${items[item].quantity}</td>
    `;

    cartTableBody.appendChild(row);
  }
}

/**
 * Represents a utility class to create course items.
 */
export class CreateCourseItem {
  /**
   * Creates a course item from the provided info card.
   * @param {Element} infoCard - The info card element.
   * @returns {Object} - An object representing the course item.
   */
  static createCourseItem(infoCard) {
    return {
      image: this.getImage(infoCard),
      name: this.getName(infoCard),
      price: this.getPrice(infoCard)
    };
  }

  /**
   * Retrieves the image URL from the info card.
   * @param {Element} infoCard - The info card element.
   * @returns {string} - The image URL.
   */
  static getImage(infoCard) {
    let image = infoCard.parentElement.children[0].getAttribute("src");
    if (image === null) { throw NoImageFound; }
    return image;
  }

  /**
   * Retrieves the name from the info card.
   * @param {Element} infoCard - The info card element.
   * @returns {string} - The name.
   */
  static getName(infoCard) {
    let name = infoCard.children[0].innerHTML;
    if (name === null) { throw NoNameFound; }
    return name;
  }

  /**
   * Retrieves the price from the info card.
   * @param {Element} infoCard - The info card element.
   * @returns {string} - The price.
   */
  static getPrice(infoCard) {
    const priceElement = infoCard.children[3];
    let price = null;
    if (priceElement.childElementCount === 1) {
      price = priceElement.children[0].innerText;
    } else {
      price = priceElement.innerText.split('\n')[0];
    }
    if (price === null) { throw NoPriceFound; }
    return price;
  }
}

/**
 * The shopping cart instance.
 */
export const cart = new Cart();
