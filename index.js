const express = require("express");
const route = require("./routes/client/index.route");
const database = require("./config/database");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const routeAdmin = require("./routes/admin/index.route");

database.connect();

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
route(app);
routeAdmin(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
