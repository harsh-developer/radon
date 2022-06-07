const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")
const AuthorController= require("../controllers/authorController");
const { route } = require('express/lib/application');

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createNewBook", BookController.createNewBook  )

router.post("/createNewAuthor", AuthorController.createNewAuthor)

router.get("/booksByBhagat", AuthorController.booksByBhagat)

router.get("/updateBookPrice", BookController.updateBookPrice)

module.exports = router;