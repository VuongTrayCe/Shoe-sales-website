const productRouter = require("./product.route");
const dashboardrouter = require("./dashboard.route");

const systemConfig = require("../../config/system");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixedAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboardrouter);
  app.use(PATH_ADMIN + "/products", productRouter);

  // app.use("/home", homerouter);
  // app.use("/products", productRouter);
};
