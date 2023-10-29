
/*function loadEventListeners() {}*/

class Cart {
  _items = []

  addItem(...args) {
    for (let i = 0; i < args.length; i++) {
      if (args[i].name in this._items) {
        this._items[args[i].name].quantity++
      }
      else {
        this._items[args[i].name ]= {itemInfo : args[i], quantity : 1}
      }
    }
  }

  getItems() {
    return this._items
  }

  removeItem(itemName) {
    let itemMap = this._items.map((cartItem) => cartItem.name)
    let itemIndex = itemMap.indexOf(itemName)

    if (itemIndex !== -1)
    {
      this._items.slice(itemIndex, itemIndex + 1)
    }
  }

  emptyCart () {
    this._items = []
  }
}

const cart = new Cart()
