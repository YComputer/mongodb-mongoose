var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//model
var Genre = require('./model/genre');

// connect to mongoose
// 数据库可以不提前创建，只要这里指定了连接，在mongoose调用成功以后，会直接创建数据库和表。
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/api/genres', function(req, res){
    // var genre = new Genre({name:'name3'});
    // genre.save(function(err, obj){
    //     res.json(obj)
    // })
    Genre.getGenres(function(err, data){
        if(err){
            console.log(err);
            throw err;
        }
        res.json(data);
    })
});

app.listen(3000);
console.log('running on port 3000');