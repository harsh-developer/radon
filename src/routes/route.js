const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createNewBook", BookController.createNewBook  )

router.get("/getAllBooks", BookController.getAllBooks)

module.exports = router;