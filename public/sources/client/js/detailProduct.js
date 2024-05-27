const btn2 = document.querySelectorAll(".product-img");
btn2.forEach((element) => {
  element.addEventListener("click", (e) => {
    var url = new URL(document.location.href);
    const newPath = element.getAttribute("path");

    // const newPath = url.href + element.getAttribute("path");
    // form.action = newPath;

    // form.submit();
    // url.searchParams.set("range", element.value);
    document.location.href = newPath;
  });
});

const img = document.querySelectorAll(".img-select a");
const imgBtn = [...img];
let eleSelected = imgBtn[0].parentNode;
eleSelected.style.border = "4px solid red";

let imgId = 1;
img.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    eleSelected.style.border = "4px solid rgb(170, 157, 157)";

    imgId = item.getAttribute("data-id");
    eleSelected = item.parentNode;
    eleSelected.style.border = "4px solid red";
    slideImage();
  });
});
function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase:first-child"
  ).clientWidth;
  console.log(displayWidth);
  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

// seclect size
const btnSize = document.querySelectorAll(".size-item");
let sizeSelected = btnSize[0];
sizeSelected.style.border = "3px solid red";
const stock = document.querySelector(".product-stock p");
stock.innerHTML = "Stock: " + sizeSelected.getAttribute("stock");

btnSize.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (sizeSelected) {
      sizeSelected.style.border = "3px solid rgb(36, 34, 34)";
    }

    sizeSelected = item;
    sizeSelected.style.border = "3px solid red";
    stock.innerHTML = "Stock: " + sizeSelected.getAttribute("stock");
  });
});
