const express = require("express");
const route = require("./routes/client/index.route");
const database = require("./config/database");
var methodOverride = require("method-override");
var flash = require("express-flash");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Override Method
app.use(methodOverride("_method"));

const routeAdmin = require("./routes/admin/index.route");

database.connect();
app.use(cookieParser("keyboard cat"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
route(app);
routeAdmin(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
