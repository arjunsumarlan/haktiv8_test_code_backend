"use strict";

const movieService = require("./services/movie.service");
let router = require("express").Router();

router.get(
  "/",
  async (req, res, next) => {
    try {
      let movies = await movieService.getAllMovies();

      return res.status(200).json({ movies });
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
      let movie = await movieService.getMovie(
        id
      );

      return res.status(200).json({ movie });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/add",
  async (req, res, next) => {
    let movieData = {
      movie: req.body.movie,
      genre: req.body.genre,
      productionHouseId: req.body.productionHouseId
    };

    try {
      let movie = await movieService.addMovie(
        movieData
      );

      return res.status(201).json({
        message: "movie created!",
        data: movie
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/update/:id",
  async (req, res, next) => {
    let id = req.params.id;
    let movieData = {
      movie: req.body.movie,
      genre: req.body.genre,
      productionHouseId: req.body.productionHouseId
    };

    try {
      let movie = await movieService.updateMovie(
        id,
        movieData
      );

      return res.status(201).json({
        message: "movie updated!",
        data: movie
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
      await movieService.deleteMovie(
        id
      );

      return res.status(201).json({
        message: "movie deleted!"
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
