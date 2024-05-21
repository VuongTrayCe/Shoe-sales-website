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
  modal.hide(); // Displays the modal
});
var btnDeleteSizeProduct;
const btnAddSizeProduct = document.querySelector(".btnAddSizeProduct");
btnAddSizeProduct.addEventListener("click", function () {
  const product_size = document.querySelector("#product-size");
  const product_price = document.querySelector("#product-price");
  const product_stock = document.querySelector("#product-stock");
  const col1 = document.createElement("div");
  col1.classList.add("col-md-3");
  const col2 = document.createElement("div");
  col2.classList.add("col-md-3");
  const col3 = document.createElement("div");
  col3.classList.add("col-md-2");
  const col4 = document.createElement("div");
  col4.classList.add("col-md-2");

  const formGroup1 = document.createElement("div");
  formGroup1.classList.add("form-group");
  formGroup1.classList.add("al");

  const formGroup2 = document.createElement("div");
  formGroup2.classList.add("form-group");
  const formGroup3 = document.createElement("div");
  formGroup3.classList.add("form-group");

  const sizeLabel = document.createElement("label");
  sizeLabel.textContent = "Size: ";
  const priceLabel = document.createElement("label");
  priceLabel.textContent = "Price: ";
  const stockLabel = document.createElement("label");
  stockLabel.textContent = "stock: ";

  const sizeSpan = document.createElement("span");
  const priceSpan = document.createElement("span");
  const stockSpan = document.createElement("span");
  const flag =
    hasLetters(product_size.value) &&
    hasLetters(product_price.value) &&
    hasLetters(product_stock.value);
  if (flag) {
    sizeSpan.textContent = product_size.value;
    priceSpan.textContent = product_price.value;
    stockSpan.textContent = product_stock.value;
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");
    btnDelete.classList.add("btnDeleteSizeProduct");
    btnDelete.setAttribute("type", "button");

    formGroup1.appendChild(sizeLabel);
    formGroup1.appendChild(sizeSpan);
    formGroup2.appendChild(priceLabel);
    formGroup2.appendChild(priceSpan);
    formGroup3.appendChild(stockLabel);
    formGroup3.appendChild(stockSpan);

    col1.appendChild(formGroup1);
    col2.appendChild(formGroup2);
    col3.appendChild(formGroup3);
    col4.appendChild(btnDelete);

    const row = document.createElement("div");
    row.classList.add("row");
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    const sps1 = document.getElementById("SizePriceStock");

    sps1.insertAdjacentElement("afterend", row);

    btnDelete.addEventListener("click", () => {
      console.log("Fu");
      row.remove();
    });
  } else {
    alert("Vui lòng nhập đúng định dạng");
  }
});
