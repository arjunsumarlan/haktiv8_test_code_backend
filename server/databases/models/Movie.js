"use strict";

const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../connection");
const ProductionHouse = require("./ProductionHouse");

class Movie extends Model {}
Movie.init(
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    movie: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    genre: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    productionHouseId: {
      type: Sequelize.INTEGER(11)
    },
  },
  {
    sequelize,
    modelName: "Movie"
  }
);

ProductionHouse.hasMany(Movie, {
  as: "production_house_movie",
  foreignKey: "productionHouseId"
});
Movie.belongsTo(ProductionHouse, {
  as: "movie_production_house",
  foreignKey: "productionHouseId"
});

module.exports = Movie;
