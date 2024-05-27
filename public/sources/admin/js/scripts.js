// selectedOption.selected = true;
var url = new URL(document.location.href);
// console.log(optionStatuss);
const selectElement = document.getElementById("comboboxChangeStatus");
selectElement.addEventListener("change", () => {
  //   const optionValue = optionStatuss.value;
  const selectedIndex = selectElement.selectedIndex;
  const selectedOption = selectElement.options[selectedIndex];
  if (selectedOption.value != "") {
    url.searchParams.set("status", selectedOption.value);
  } else {
    url.searchParams.delete("status");
  }
  document.location.href = url.href;
});

const form_search = document.querySelector(".form-search");
if (form_search) {
  form_search.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = new URL(document.location.href);
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    document.location.href = url.href;
  });
}

// Pagination Scripts
const page = document.querySelectorAll(".page-link");
page.forEach((element) => {
  element.addEventListener("click", (e) => {
    const url2 = new URL(document.location.href);

    const index = element.getAttribute("value");
    if (index) {
      url2.searchParams.set("page", index);
      document.location.href = url2.href;
    }
  });
});

function Detail(item) {
  console.log(item);
}
