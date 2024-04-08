module.exports.index = (req, res) => {
  res.render("admin/pages/products/index", {
    title: "pagedashboard",
    message: "This is Home!",
  });
};
