"use strict";

const express = require("express");

const movieController = require("../../../controllers/apis/movie/movie.controller");
const productionHouseController = require("../../../controllers/apis/productionHouse/production-house.controller");

// INIT ROUTER
let router = express.Router();

router.use("/movie", movieController);
router.use("/productionhouse", productionHouseController);

module.exports = router;
