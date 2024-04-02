module.exports.index = (req, res) => {
  res.render("client/page/product/index", {
    title: "Hey",
    message: "This is product page!",
  });
};
