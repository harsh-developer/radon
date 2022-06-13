const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createUser", commonMW.mid2, userController.createUser)

router.post("/createProduct", productController.createProduct)

router.post("/createOrder", commonMW.mid2, commonMW.mid3, orderController.createOrder)

module.exports = router;