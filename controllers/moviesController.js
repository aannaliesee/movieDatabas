const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('movies').find();
    console.log(result);
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (error) {
    console.error('Error retrieving movies:', error);
    res.status(500).json({ error: 'There was an error while retrieving the movies.' });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movieId = ObjectId.createFromHexString(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("movies")
      .findOne({ _id: movieId });
    if (!result) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result); // Return the document directly
  } catch (error) {
    console.error("Error getting movie by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



const postMovie = async (req, res) => {
  const movie = {
    title: req.body.title,
    directors: req.body.directors, // required, allow both string and array
    actors: req.body.actors, // required
    genre: req.body.genre,
    // subgenre: 'array', // not required
    releaseYear: req.body.releaseYear, // allow only integers between 1800-2025
    ratings: req.body.ratings, // required
    // runtime: 'string', //not required            
    // productionCo: 'string', //not required
    // plotSummary: 'string' // not required
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("movies")
    .insertOne(movie);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the movie."
      );
  }
};

const putMovie = async (req, res) => {
  const movieId = ObjectId.createFromHexString(req.params.id);
  const movie = {
    title: req.body.title,
    directors: req.body.directors, // required, allow both string and array
    actors: req.body.actors, // required
    genre: req.body.genre,
    // subgenre: 'array', // not required
    releaseYear: req.body.releaseYear, // allow only integers between 1800-2025
    ratings: req.body.ratings, // required
    // runtime: 'string', //not required            
    // productionCo: 'string', //not required
    // plotSummary: 'string' // not required
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("movies")
    .replaceOne({ _id: movieId }, movie);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the movie."
      );
  }
};

const deleteMovie = async (req, res) => {
  const movieId = ObjectId.createFromHexString(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("movies")
    .deleteOne({ _id: movieId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while deleting the movie."
      );
  }
};

module.exports = {
  getAll,
  getMovieById,
  postMovie,
  putMovie,
  deleteMovie

};
