// selectedOption.selected = true;
var url = new URL(document.location.href);
// console.log(optionStatuss);
const selectElement = document.getElementById("select1");
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
