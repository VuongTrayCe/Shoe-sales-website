const product = require("../../models/product.model");
const getPagination = require("../../helpers/getPagination");

module.exports.index = async (req, res) => {
  // const listOption = listOption1(req.query);
  let find = {
    delete: "false",
  };
  // Pagination
  const numberDocument = await product.countDocuments(find);
  const pagination = getPagination(req.query, 8, numberDocument);

  const listproduct = await product
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);
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
    pagination: pagination,
  });
};
