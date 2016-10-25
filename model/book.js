var mongoose = require('mongoose');

// schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        require: true
    },
    publisher: {
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book',bookSchema);

// get book
module.exports.getBooks = function(cb, limit){
    Book.find(cb).limit(limit);
}

module.exports.getBookById = function(id, cb){
    Book.findById(id,cb);
}