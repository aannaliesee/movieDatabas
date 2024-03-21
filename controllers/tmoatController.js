const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('tmoat').find();
    console.log(result);
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (error) {
    console.error('Error retrieving the greatest movies of all time:', error);
    res.status(500).json({ error: 'There was an error while retrieving the the greatest movies of all time.' });
  }
};

const getSingle = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid movie id to find a movie.');
  }
  const tmoatId = new ObjectId(req.params.id);
  mongodb
    .getDb().db().collection('tmoat').find({ _id: tmoatId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};

const createTMOAT = async (req, res) => {
  try {
    // Use the middleware for validation
   validateMovie(req, res, async () => {
      const tmoat = {
        title: req.body.title,
        year: req.body.year,
        source: req.body.source,
        authority: req.body.authority,
        rank: req.body.rank,
        plotSummary: req.body.plotSummary
      };
      const response = await mongodb.getDb().db().collection('tmoat').insertOne(tmoat);
      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        handleErrors(response.error || 'Some error occurred while adding the movie.', res, 500);
      }
    });
  } catch (error) {
    handleErrors(error, res);
  }
};

const updateTMOAT = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid tmoat id to update a movie.');
    }
      const tmoatId = new ObjectId(req.params.id);
      const tmoat = {
        title: req.body.title,
        year: req.body.year,
        source: req.body.source,
        authority: req.body.authority,
        rank: req.body.rank,
        plotSummary: req.body.plotSummary
      };
      const response = await mongodb.getDb().db().collection('tmoat').replaceOne({ _id: tmoatId }, tmoat);
      if (response.modifiedCount > 0) {
          res.status(204).send();
      } else {
          handleErrors(response.error || 'Some error occurred while updating the movie.', res, 500);
      }
  } catch (error) {
      handleErrors(error, res);
  }
};
  
const deleteTMOAT = async (req, res) => {
  try {
      const tmoatId = new ObjectId(req.params.id);
      const response = await mongodb.getDb().db().collection('tmoat').remove({ _id: tmoatId }, true);
      if (response.deletedCount > 0) {
          res.status(204).send();
      } else {
          handleErrors(response.error || 'Some error occurred while deleting the movie.', res, 500);
      }
  } catch (error) {
      handleErrors(error, res);
  }
};

module.exports = {
  getAll,
  getSingle,
  createTMOAT,
  updateTMOAT,
  deleteTMOAT
};