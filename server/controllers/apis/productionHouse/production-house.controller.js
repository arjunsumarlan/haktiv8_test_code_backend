"use strict";

const productionHouseService = require("./services/production-house.service");
let router = require("express").Router();

router.get(
  "/",
  async (req, res, next) => {
    try {
      let productionHouse = await productionHouseService.getAllProductionHouse();

      return res.status(200).json({ productionHouse });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  async (req, res, next) => {
    let id = req.params.id;

    try {
      let production_house = await productionHouseService.getProductionHouse(
        id
      );

      return res.status(200).json({ production_house });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/add",
  async (req, res, next) => {
    let productionHouseData = {
      name: req.body.name
    };

    try {
      let production_house = await productionHouseService.addProductionHouse(
        productionHouseData
      );

      return res
        .status(201)
        .json({ message: "production house created!", data: production_house });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/update/:id",
  async (req, res, next) => {
    let id = req.params.id;
    let productionHouseData = {
      name: req.body.name
    };

    try {
      let productionHouse = await productionHouseService.updateProductionHouse(
        id,
        productionHouseData
      );

      return res.status(201).json({
        message: "production house updated!",
        data: productionHouse
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/delete/:id",
  async (req, res, next) => {
    let id = req.params.id;

    try {
      await productionHouseService.deleteProductionHouse(
        id
      );

      return res.status(201).json({
        message: "production house deleted!"
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
