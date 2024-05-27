const productRouter = require("./product.route");
const dashboardrouter = require("./dashboard.route");

const systemConfig = require("../../config/system");
const orderRouter = require("./order.route");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixedAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboardrouter);
  app.use(PATH_ADMIN + "/products", productRouter);
  app.use(PATH_ADMIN + "/order", orderRouter);
};
