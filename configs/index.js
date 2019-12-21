"use strict";

const _ = require("lodash");
const envConfig = require("./local");

let defaultConfig = {
  env: "local"
};

module.exports = _.merge(defaultConfig, envConfig);
