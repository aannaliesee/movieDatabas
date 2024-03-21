const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('genres').find();
    console.log(result);
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (error) {
    console.error('Error retrieving genres:', error);
    res.status(500).json({ error: 'There was an error while retrieving the genres.' });
  }
};

const getGenresById = async (req, res) => {
  try {
    const genreId = ObjectId.createFromHexString(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("genres")
      .findOne({ _id: genreId });
    if (!result) {
      return res.status(404).json({ message: "genre not found" });
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result); // Return the single document directly
  } catch (error) {
    console.error("Error getting genre by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



const createGenre = async (req, res) => {
  const genre = {
    genre: req.body.genre,
    movies: req.body.movies,
    // title: req.body.title,
    // directors: req.body.directors,
    // actors: req.body.actors,
    // name: req.body.name,
    // role: req.body.role,
    // subgenre: req.body.subgenre,
    // releaseYear: req.body.releaseYear,
    // ratings: req.body.ratings,
    // runtime: req.body.runtime,
    // productionCo: req.body.productionCo,
    // plotSummary: req.body.plotSummary,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("genres")
    .insertOne(genre);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the genre."
      );
  }
};

const updateGenre = async (req, res) => {
  const genreId = ObjectId.createFromHexString(req.params.id);
  const genre = {
    genre: req.body.genre,
    movies: req.body.movies,
    // title: req.body.title,
    // directors: req.body.directors,
    // actors: req.body.actors,
    // subgenre: req.body.subgenre,
    // releaseYear: req.body.releaseYear,
    // ratings: req.body.ratings,
    // runtime: req.body.runtime,
    // productionCo: req.body.productionCo,
    // plotSummary: req.body.plotSummary,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("genres")
    .replaceOne({ _id: genreId }, genre);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the genre."
      );
  }
};

const deleteGenre = async (req, res) => {
  const genreId = ObjectId.createFromHexString(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("genres")
    .deleteOne({ _id: genreId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while deleting the genre."
      );
  }
};

module.exports = {
  getAll,
  getGenresById,
  createGenre,
  updateGenre,
  deleteGenre

};

