// const { count } = require("console")
const productModel = require("../models/productModel")

/*
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}*/

const createProduct= async function (req, res) {
    let data = req.body
    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}

// module.exports.createBook= createBook
module.exports.createProduct = createProduct