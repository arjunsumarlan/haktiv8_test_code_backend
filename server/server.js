"use strict";

const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function() {
  let server = express();
  let create;
  let start;

  create = function(config) {
    let routes = require("./routes/router");

    // Returns middleware that parses json
    server.use(morgan("dev"));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(bodyParser.json({ type: "application/vnd.api+json" }));
    server.use(cors());
    server.use(compression());

    // Set up routes
    routes.init(server);
  };

  start = function() {
    let port = 3000;
    server.listen(port, function() {
      console.log("Server listening");
    });
  };

  return {
    create: create,
    start: start
  };
};
