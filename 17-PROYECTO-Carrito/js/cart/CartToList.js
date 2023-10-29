const cartTableBody = document.querySelector(".cart-table-body");

function cartToList(cart) {

  cart.getItems().forEach(item => {
    const row = document.createElement("tr"); // Create a new table row element
    row.innerHTML = `
      <td>${item.itemInfo.image}</td>
      <td>${item.itemInfo.name}</td>
      <td>${item.itemInfo.price}</td>
      <td>${item.quantity}</td>
    `;

    cartTableBody.appendChild(row); // Append the row to the cartTableBody
  });
}
