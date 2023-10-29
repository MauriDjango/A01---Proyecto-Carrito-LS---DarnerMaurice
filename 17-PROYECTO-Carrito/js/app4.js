const primaryButtons = document.querySelectorAll('.button-primary')
const list = document.querySelector("#lista-carrito")
const emptyList = document.getElementById("vaciar-carrito")
const removeButton = document.querySelector('.remove-button')

primaryButtons.forEach(function(elem){
  elem.addEventListener('click',event => {
    let dataID = elem.getAttribute('data-id')
    addToCarrito(dataID)
  })
})

function addToCarrito(id){
  let element = document.createElement("tr")
  let card = null;
  let cardArray = document.querySelectorAll(".card")
  cardArray.forEach(function(elem){
    if (elem.lastElementChild.lastElementChild.getAttribute('data-id') == id){
      card =  elem
    }
  })
  if (document.getElementsByClassName(`cantidad-${id}`).length === 0 ){
    createNewElement(id, card, element)
  }else {
    let cantidad = document.getElementsByClassName(`cantidad-${id}`)[0]
    if (cantidad) {
      let precio = cantidad.parentElement.children[2]
      cantidad.textContent = parseInt(cantidad.textContent) + 1
      precio.textContent = parseInt(precio.textContent) + parseInt(card.lastElementChild.children[3].querySelector(".u-pull-right").textContent)
    }
  }
}

emptyList.addEventListener("click", () => {
  while (list.lastElementChild !== null) {
    list.removeChild(list.lastElementChild);
  }

})
function removeOne(id, ) {
  let cantidad = document.getElementsByClassName(`cantidad-${id}`)[0];
  if (cantidad) {
    let row = cantidad.parentElement;
    let precio = row.children[2];
    cantidad.textContent = parseInt(cantidad.textContent) - 1;
    precio.textContent = parseInt(precio.textContent) - parseInt(row.children[3].querySelector(".u-pull-right").textContent);
    if (cantidad.textContent == 0) {
      row.parentElement.removeChild(row);
    }
  }
}

function createNewElement(id, card, element) {
  let image = document.createElement("img")
  let nombre = document.createElement("th")
  let precio = document.createElement("th")
  let cantidad = document.createElement("th")
  let remove = document.createElement("button")
  addPropertiesToElements(cantidad, id, image, card, nombre, precio, remove)
  addNewElements(element, image, nombre, precio, cantidad, remove)
}



function addPropertiesToElements(cantidad, id, image, card, nombre, precio, remove) {
  cantidad.classList.add(`cantidad-${id}`)
  image.src = card.firstElementChild.getAttribute('src')
  image.width = 150
  image.height = 100
  nombre.textContent = card.lastElementChild.firstElementChild.textContent
  precio.textContent = card.lastElementChild.children[3].querySelector(".u-pull-right").textContent
  cantidad.textContent = "1"
  remove.textContent = "eliminar"
  remove.style.margin = "0 auto"
  remove.style.alignItems = "center";
  remove.style.justifyContent = "center";
  remove.classList.add(`remove-button`)


  remove.addEventListener('click', () => {
    removeOne(id)
  })
}

function addNewElements(element, image, nombre, precio, cantidad, remove) {
  element.appendChild(image)
  element.appendChild(nombre)
  element.appendChild(precio)
  element.appendChild(cantidad)
  element.appendChild(remove)
  list.lastElementChild.appendChild(element)
}
