"use strict";

const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../connection");

class ProductionHouse extends Model {}
ProductionHouse.init(
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "ProductionHouse"
  }
);

module.exports = ProductionHouse;
