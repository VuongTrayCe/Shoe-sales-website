module.exports.dashboard = (req, res) => {
  res.render("admin/pages/dashboard/index", {
    title: "pagedashboard",
    message: "This is Home!",
  });
};
