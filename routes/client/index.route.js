const productRouter = require("./product.route");
const homerouter = require("./home.route");

module.exports = (app) => {
  app.use("/", homerouter);
  app.use("/home", homerouter);
  app.use("/products", productRouter);
};
