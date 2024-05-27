import { hasLetters } from "../../../validation/hasLetters.js"; // Assuming validation.js is in the same directory

// const a = require("../../../validation/hasLetters");
const modalElement = document.getElementById("productModal");
const modalToggle = document.querySelector(".add_Product"); // Replace with your button ID
const modal = new bootstrap.Modal(modalElement);
modalToggle.addEventListener("click", function () {
  modal.show(); // Displays the modal
});

const btnClose = document.querySelector(".btnCloseFormAddProduct"); // Replace with your button ID
btnClose.addEventListener("click", function () {
  const form = document.getElementById("cat_form");
  console.log(form);
  form.reset();

  modal.hide(); // Displays the modal
});
var btnDeleteSizeProduct;
const btnAddSizeProduct = document.querySelector(".btnAddSizeProduct");
btnAddSizeProduct.addEventListener("click", function () {
  const product_size = document.querySelector("#product-size");
  const product_stock = document.querySelector("#product-stock");
  const col1 = document.createElement("div");
  col1.classList.add("col-md-5");
  const col2 = document.createElement("div");
  col2.classList.add("col-md-5");
  const col3 = document.createElement("div");
  col3.classList.add("col-md-2");

  const formGroup1 = document.createElement("div");
  formGroup1.classList.add("form-group");
  formGroup1.classList.add("al");

  const formGroup2 = document.createElement("div");
  formGroup2.classList.add("form-group");

  const sizeLabel = document.createElement("label");

  sizeLabel.textContent = "Size: ";
  const sizeInput = document.createElement("input");
  sizeInput.setAttribute("name", "size");
  sizeInput.classList.add("form-control");

  const stockLabel = document.createElement("label");
  stockLabel.textContent = "stock: ";
  const stockInput = document.createElement("input");
  stockInput.setAttribute("name", "stock");

  stockInput.classList.add("form-control");

  const sizeSpan = document.createElement("span");
  const stockSpan = document.createElement("span");
  const flag =
    hasLetters(product_size.value) && hasLetters(product_stock.value);
  if (flag) {
    sizeInput.value = product_size.value;
    stockInput.value = product_stock.value;
    product_size.value = "";
    product_stock.value = "";
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");
    btnDelete.classList.add("btnDeleteSizeProduct");
    btnDelete.setAttribute("type", "button");

    formGroup1.appendChild(sizeLabel);
    formGroup1.appendChild(sizeInput);

    formGroup1.appendChild(sizeSpan);
    formGroup2.appendChild(stockLabel);
    formGroup2.appendChild(stockInput);

    formGroup2.appendChild(stockSpan);

    col1.appendChild(formGroup1);
    col2.appendChild(formGroup2);
    col3.appendChild(btnDelete);
    col3.classList.add("pt-4");

    const row = document.createElement("div");
    row.classList.add("row");
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    const sps1 = document.getElementById("SizePriceStock");

    sps1.insertAdjacentElement("afterend", row);

    btnDelete.addEventListener("click", () => {
      row.remove();
    });
  } else {
    alert("Vui lòng nhập đúng định dạng");
  }
});
// Onchange for price input
const btnProductPrice = document.querySelector(".form-group #product_price");
const spanErrorProductPrice = document.getElementById("productPriceError");
btnProductPrice.addEventListener("input", () => {
  if (hasLetters(btnProductPrice.value) == false) {
    console.log("Vuong");

    spanErrorProductPrice.textContent = "Vui lòng nhập đúng định dạng!";
  } else {
    spanErrorProductPrice.textContent = "";
  }
});

const btnRadios = document.querySelectorAll('input[name="flexRadioDefault1"]');
btnRadios.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(btnRadios); //
  });
});
// Get all radio buttons with the name 'flexRadioDefault1'
// const radios = document.querySelectorAll('input[name="flexRadioDefault1"]');
// console.log(radios);

// // Function to get the selected value
// function getSelectedRadioValue() {
//   for (const radio of radios) {
//     if (radio.checked) {
//       return radio.value; // Return the value of the checked radio
//     }
//   }
//   return null; // If no radio is checked, return null
// }

// // Example usage
// const selectedValue = getSelectedRadioValue();
// console.log(selectedValue);
