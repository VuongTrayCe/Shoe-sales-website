const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  const listproduct = await Product.find({
    status: "active",
  });
  // console.log(listproduct);
  res.render("client/page/product/index", {
    title: "Hey",
    message: "This is product page!",
    product: listproduct,
  });
};
