const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    category: { 
        type: String,
        enum: ["thriller", "motivational", "love", "fiction"] 
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('bookList', bookSchema) //"bookList" is the name which will reflect in database



// String, Number
// Boolean, Object/json, array