"use strict";

const Movie = require("../../../../databases/models/Movie");

const getAllMovies = async () => {
  let movies = await Movie.findAll();
  return movies;
};

const getMovie = async productionHouseId => {
  let movie = await Movie.findAll({
    where: {
      productionHouseId: productionHouseId
    }
  });

  return movie;
};

const addMovie = async movieData => {
  let movie = await Movie.create({
    movie: movieData.movie,
    genre: movieData.genre,
    productionHouseId: movieData.productionHouseId
  });

  return movie;
};

const updateMovie = async (id, movieData) => {
  await Movie.update(
    {
      movie: movieData.movie,
      genre: movieData.genre,
      productionHouseId: movieData.productionHouseId
    },
    {
      where: {
        id: id
      }
    }
  );

  let movie = await Movie.findByPk(id);

  return movie;
};

const deleteMovie = async (id) => {
  await Movie.destroy(
    {
      where: {
        id: id
      }
    }
  );

  return;
};

module.exports = {
  getAllMovies: getAllMovies,
  getMovie: getMovie,
  addMovie: addMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie
};
