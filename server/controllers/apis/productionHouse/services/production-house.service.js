"use strict";

const ProductionHouse = require("../../../../databases/models/ProductionHouse");

const getAllProductionHouse = async () => {
  let productionHouse = await ProductionHouse.findAll();
  return productionHouse;
};

const getProductionHouse = async id => {
  let production_houses = await ProductionHouse.findAll({
    where: {
      id: id
    }
  });

  return production_houses;
};

const addProductionHouse = async productionHousesData => {
  let production_house = await ProductionHouse.create({
    name: productionHousesData.name
  });

  return production_house;
};

const updateProductionHouse = async (id, productionHouseData) => {
  await ProductionHouse.update(
    {
      name: productionHouseData.name
    },
    {
      where: {
        id: id
      }
    }
  );

  let productionHouse = await ProductionHouse.findByPk(id);

  return productionHouse;
};

const deleteProductionHouse = async (id) => {
  await ProductionHouse.destroy(
    {
      where: {
        id: id
      }
    }
  );

  return;
};

module.exports = {
  getAllProductionHouse: getAllProductionHouse,
  getProductionHouse: getProductionHouse,
  addProductionHouse: addProductionHouse,
  updateProductionHouse: updateProductionHouse,
  deleteProductionHouse: deleteProductionHouse
};
