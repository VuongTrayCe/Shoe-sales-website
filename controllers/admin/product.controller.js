const product = require("../../models/product.model");
// [GET] /admin/products
module.exports.index = async (req, res) => {
  let listOption = [
    {
      name: "ALL",
      value: "",
      class: "",
    },
    {
      name: "active",
      value: "active",
      class: "",
    },
    {
      name: "inactive",
      value: "inactive",
      class: "",
    },
  ];
  let find = {
    delete: "false",
  };
  if (req.query.status) {
    const index = listOption.findIndex((items) => {
      return items.value == req.query.status;
    });
    listOption[index].class = "active";
    find.status = req.query.status;
  }

  console.log(listOption);
  const listproduct = await product.find(find);
  console.log(listproduct.length);
  res.render("admin/pages/products/index", {
    title: "pagedashboard",
    message: "This is Home!",
    products: listproduct,
    listOption: listOption,
  });
};
