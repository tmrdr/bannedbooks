'use strict';
module.exports = function(sequelize, DataTypes) {
  var book = sequelize.define('book', {
    title: DataTypes.TEXT,
    author: DataTypes.TEXT,
    year_published: DataTypes.TEXT,
    type: DataTypes.TEXT,
    description_of_the_cases: DataTypes.TEXT
  }, {
    timestamps: false
  });
  return book;
};
