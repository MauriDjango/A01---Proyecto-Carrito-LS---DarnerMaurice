

//I need to think about whether the creator and normal class deserve to be
// separate classes
class CourseItem {
  itemInfo = {
    image : null,
    name : null,
    price : null,
  }

  constructor (image, name, price) {
    this.itemInfo.image = image;
    this.itemInfo.name = name;
    this.itemInfo.price = price;
  }
}

class CreateCourseItem {
  static createCourseItem(infoCard) {
    return {
      image: this.getImage(infoCard),
      name: this.getName(infoCard),
      price: this.getPrice(infoCard)
    }
  }
  
  static getImage(infoCard) {
    let image = infoCard.parentElement.children[0].getAttribute("src")
    if (image === null) { throw NoImageFound }
    return image
  }

  static getName(infoCard) {
    let name = infoCard.children[0].innerHTML
    if (name === null) { throw NoNameFound }
    return name
  }

  static getPrice(infoCard) {
    const priceElement = infoCard.children[3]
    let price = null
    if (priceElement.childElementCount === 0) {
      priceElement.children[0].innerHTML
    } else {
      price = priceElement.innerHTML
    }
    if (price === null) { throw NoPriceFound }
    return price
  }
}