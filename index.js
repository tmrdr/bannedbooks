//requires
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");

//app variables
var app = express();
var db = require("./models");
var path = require('path');

//setup/use statements
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

//routs
app.get("/", function(req,res){
  res.render("home");
});

// get all books
app.get("/show", function(req,res){
  db.book.findAll({
    order: [
      ['id', 'ASC']
    ]
  }).then(function(books){
  res.render("show", {books: books});
  });
});

//get one book
app.get("/:id", function(req, res){
  db.book.findById(req.params.id).then(function(book){
  res.render("one", {book: book});
  });
});

//get random book ////////// need to migrate to a seperate js file, math.random not allowed in this sacred place
app.get("/:id", function(req, res){
  db.article.findById(req.params.id).then(function(book){
  res.render("one", {book: book});
  });
});

//listen
app.listen(3000);
