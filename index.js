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

//get random book
app.get("/random", function(req, res){
  db.book.findAll().then(function(books){
    var index = Math.floor(Math.random() * books.length);
    res.redirect("/" + index);
  });
});

//get one book
app.get("/:id", function(req, res){
  db.book.findById(req.params.id).then(function(book){
  res.render("one", {book: book});
  });
});

//listen
app.listen(3000);
