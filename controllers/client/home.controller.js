module.exports.index = (req, res) => {
  res.render("client/page/home/index", {
    title: "pageHome",
    message: "This is Home!",
  });
};
