"use strict";

const Sequelize = require("sequelize");
const config = require("../../configs");

// STAGING atau DEV
let sequelize = new Sequelize(config.dbname, config.dbuser, config.dbpass, {
  host: config.dbhost,
  dialect: "mysql",
  define: {
    timestamps: false,
    freezeTableName: true
  },
  logging: config.dblogging
});

module.exports = sequelize;
