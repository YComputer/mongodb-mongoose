var mongoose = require('mongoose');

// schema
var genreSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    create_date:{
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

// get genre
module.exports.getGenres = function(cb, limit){
    Genre.find(cb).limit(limit);
}

module.exports.addGenres = function(genre, cb){
    Genre.create(genre,cb);
}