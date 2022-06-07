const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName: 1, authorName: 1, _id:0})
    res.send({msg: allBooks})
}


const getBooksInYear= async function (req, res){
    let bookByYear= req.body.year
    let savedByYear= await BookModel.find({year: bookByYear})
    res.send({msg: savedByYear})
}

const getParticularBooks= async function (req, res){
    let particularBooks= req.body
    let savedParticularBooks= await BookModel.find(particularBooks)
    res.send({msg: savedParticularBooks})
}

const getXINRBooks= async function (req, res){
    let booksByINR= await BookModel.find({$or: [{"price.indianPrice":{$eq:139}}, {"price.indianPrice":{$eq:199}}, {"price.indianPrice":{$eq:259}}]})
    res.send({msg: booksByINR})
}

const getRandomBooks= async function (req, res){
    let randomBooks= await BookModel.find({$or: [{stockAvailable: {$eq: true}}, {totalPages:{$gt:500}}]})
    res.send({msg: randomBooks})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
// module.exports.getBooksInYear= getBooksInYear