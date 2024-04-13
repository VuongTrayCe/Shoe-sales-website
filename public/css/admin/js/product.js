// Product Detail
const detail_Btn = document.querySelectorAll("[btn-data-detail]");

detail_Btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const idProduct = element.getAttribute("id_product");
    // const form = document.querySelector("#form_detail");
    // const path = form.getAttribute("data_path");
    // console.log(path);
    // const newPath = path + `/${idProduct}`;
    // form.action = newPath;
    // form.submit();
    const url3 = new URL(document.location.href);
    if (idProduct) {
      url3.searchParams.set("idDetail", idProduct);
      document.location.href = url3.href;
    }
    // const formDetaiProduct = document.querySelector(".detail_wrapper");
    // formDetaiProduct.style.display = "block";
  });
});
const detail_Btn_Close = document.querySelector(".btnCloseDetail");
const url4 = new URL(document.location.href);
if (detail_Btn_Close) {
  detail_Btn_Close.addEventListener("click", (e) => {
    const tableProduct = document.querySelector(".tableProduct");

    const formDetaiProduct = document.querySelector(".detail_wrapper");
    formDetaiProduct.style.display = "none";
    tableProduct.style.width = "100%";

    url4.searchParams.delete("idDetail");
    window.history.pushState({}, "", url4);

    // document.location.href = url4.href;
  });
}

// Add Products
const addBtn = document.querySelector(".btn_addProduct");

addBtn.addEventListener("click", (e) => {
  const url3 = new URL(document.location.href);
  const path = addBtn.getAttribute("pathCurrent");

  document.location.href = path + "add";
});

// Change the status of the product

const btnChangeStatus = document.querySelectorAll(".btnStatusProduct");
btnChangeStatus.forEach((element) => {
  element.addEventListener("click", (e) => {
    const idProduct = element.getAttribute("id_product");
    const status = element.getAttribute("status");
    const newStatus = status == "active" ? "inactive" : "active";

    const form = document.querySelector("#form_change_status");
    const path = form.getAttribute("data_path_changestatus");
    console.log(path);
    const newPath = path + `/${newStatus}/${idProduct}?_method=PATCH`;
    form.action = newPath;

    form.submit();
  });
});
