const AuthorModel= require("../models/authorModel.js")
const BookModel= require("../models/bookModel.js")

const createNewAuthor = async function (req, res){
    let authorData= req.body
    let savedAuthor= await AuthorModel.create(authorData)
    res.send({msg: savedAuthor})
}

const booksByBhagat= async function (req, res){
    let savedFindData= await AuthorModel.find({author_name: "Chetan Bhagat"}).select({author_id: 1})
    let booksByChetan= await BookModel.find({author_id: savedFindData[0].author_id})
    res.send({msg: booksByChetan})
}




module.exports.createNewAuthor= createNewAuthor
module.exports.booksByBhagat= booksByBhagat