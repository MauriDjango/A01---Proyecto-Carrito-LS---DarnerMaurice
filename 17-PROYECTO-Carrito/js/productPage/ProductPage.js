import logger from '../Loggers'

loadEventListeners()

function loadEventListeners() {
  document.addEventListener('click', (e) => {
    logger.info(`ProductPage click eventListener. Target: ${e.target}`)
    switch (e.target) {}
    courseListClickHandler(e)
  })
  document.addEventListener('mouseover', (e) => {
    courseListMouseOverHandler(e)
  })
}

function courseListClickHandler(e) {
  switch (e.target.className) {
    case "u-full-width button-primary button input agregar-carrito" : {
      return addCourseToCart(e.target.parentElement)
    }
    case "vaciar-carrito.button.u-full-width" : {
      cart.emptyCart()
      break
    }
    default : {}
  }
}

function courseListMouseOverHandler(e) {
  switch (e.target.className) {
    case "submenu" : {
      console.log("Correct mouseover target")
      cartToList(cart, cartTableBody)
    }
  }
}

//anadir button card location = e.parentElement.parentElement
function addCourseToCart(infoCard) {
  cart.addItem(CreateCourseItem.createCourseItem(infoCard))
}

