const product = require("../../models/product.model");

// [GET] /admin/order
module.exports.index = async (req, res) => {
  res.render("admin/pages/order/index", {
    title: "pagedashboard",
    message: "This is Home!",
  });
};
