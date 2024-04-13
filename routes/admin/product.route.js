const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index);
router.patch("/change-status/:status/:id", controller.changeStatus);

// router.get("/detail/:id", controller.detail);
router.get("/add", controller.add);

module.exports = router;
