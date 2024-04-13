const product = require("../../models/product.model");
const listOption1 = require("../../helpers/filterStatus");
const getPagination = require("../../helpers/getPagination");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  const listOption = listOption1(req.query);
  let find = {
    delete: "false",
  };

  if (req.query.keyword) {
    // const regex = new RegExp(keyword);
    // find.title = regex;
    find.title = { $regex: req.query.keyword, $options: "i" };
  }
  if (req.query.status) {
    find.status = req.query.status;
  }

  // Pagination
  const numberDocument = await product.countDocuments(find);
  const pagination = getPagination(req.query, 5, numberDocument);

  const listproduct = await product
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);

  // Detail
  let detailProduct;
  if (req.query.idDetail) {
    detailProduct = listproduct.find(
      (product) => product._id == req.query.idDetail
    );
  }
  res.render("admin/pages/products/index", {
    title: "pagedashboard",
    message: "This is Home!",
    products: listproduct,
    listOption: listOption,
    keyword: req.query.keyword,
    pagination: pagination,
    detailProduct1: detailProduct,
  });
};
// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.params.status;
  await product.updateOne({ _id: id }, { status: status });
  res.redirect("back");
};
// [GET] /admin/products/add
module.exports.add = async (req, res) => {
  res.render("admin/pages/products/addProduct", {
    title: "Add Product",
    message: "This is Home!",
  });
};
