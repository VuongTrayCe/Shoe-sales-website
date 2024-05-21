// Pagination Scripts
const page = document.querySelectorAll(".page-link");
page.forEach((element) => {
  element.addEventListener("click", (e) => {
    const url2 = new URL(document.location.href);
    console.log(url2);

    const index = element.getAttribute("value");
    if (index) {
      url2.searchParams.set("page", index);
      document.location.href = url2.href;
    }
  });
});