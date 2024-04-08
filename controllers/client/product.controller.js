const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  const listproduct = await Product.find({
    status: "active",
  });
  const newProducts = listproduct.map((item) => {
    item.priceNew = (
      (item.price * (100 - item.discountPercentage)) /
      100
    ).toFixed(0);
    return item;
  });
  const listRouter = ["Trang Chủ"];
  listRouter.push("Products");

  // const
  res.render("client/page/product/index", {
    title: "Trang Chủ > Products >",
    message: "This is product page!",
    product: newProducts,
    listRoute: listRouter,
  });
};
