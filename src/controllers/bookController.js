const AuthorModel= require("../models/authorModel.js")
const BookModel= require("../models/bookModel.js")

const createNewBook= async function (req, res) {
    let bookData= req.body
    let savedData= await BookModel.create(bookData)
    res.send({msg: savedData})
}

const updateBookPrice= async function (req, res){
    let updatePrice= await BookModel.findOneAndUpdate({bookName: "Two States"}, {$set:{price:100}}, {new: true}).select({author_id:1, price:1})
    let writerOfTwoStates= await AuthorModel.find({author_id: updatePrice.author_id}).select({author_name:1, _id:0})
    res.send({updatePrice,writerOfTwoStates})
}

//this is not working
const booksByPrice= async function (req, res){
    let data= await BookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id: 1})
    let writerId= data.author_id
    let writeName= await AuthorModel.find({author_id: writerId}).select({author_name: 1})
    res.send({data, writeName})
}

module.exports.createNewBook= createNewBook
module.exports.updateBookPrice= updateBookPrice
module.exports.booksByPrice= booksByPrice