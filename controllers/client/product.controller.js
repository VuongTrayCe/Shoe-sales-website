const product = require("../../models/product.model");
const getPagination = require("../../helpers/getPagination");

module.exports.index = async (req, res) => {
  // const listOption = listOption1(req.query);
  let find = {
    delete: "false",
  };
  let listRangePrice = [
    {
      text: "0-500000",
      value: "0-500000",
      id: "rangePrice1",
    },
    {
      text: "500000-1000000",
      value: "500000-1000000",
      id: "rangePrice2",
    },
    {
      text: "1000000-5000000",
      value: "1000000-5000000",
      id: "rangePrice3",
    },
    {
      text: "6000000",
      value: "6000000",
      id: "rangePrice4",
    },
  ];
  var listRange;
  if (req.query.range) {
    listRange = req.query.range.split("-");
    const listRangeInt = listRange.map((item) => {
      return parseInt(item);
    });
    find.price = { $gte: listRange[0], $lte: listRange[1] };
  }
  // if (req.query.status) {
  //   find.status = req.query.status;
  // }
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
    listRangePrice: listRangePrice,
    rangePrice: req.query.range,
  });
};
