const AuthorModel= require("../models/authorModel.js")
const BookModel= require("../models/bookModel.js")

const createNewBook= async function (req, res) {
    let bookData= req.body
    let savedData= await BookModel.create(bookData)
    res.send({msg: savedData})
}

const updateBookPrice= async function (req, res){
    let updatePrice= await BookModel.findOneAndUpdate(
        {bookName: "Two States"},
        {$set:{price:90}}
    )
    // console.log(updatePrice)
    let newPrice= updatePrice.price
    let writerOfTwoStates= await AuthorModel.find({author_id: updatePrice.author_id}).select({author_name:1})
    console.log(writerOfTwoStates)
    res.send({writerOfTwoStates,newPrice})
}

module.exports.createNewBook= createNewBook
module.exports.updateBookPrice= updateBookPrice