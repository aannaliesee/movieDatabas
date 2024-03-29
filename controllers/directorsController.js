const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('directors').find();
    console.log(result);
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (error) {
    console.error('Error retrieving directors:', error);
    res.status(500).json({ error: 'There was an error while retrieving the directors.' });
  }
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('You must have a valid director id.');
  }
  const userId = new ObjectId(req.params.id);
    mongodb
      .getDb()
      .db()
      .collection('directors')
      .find({ _id: userId})
      .toArray((err, result) => {
        if(err) {
          res.status(400).json({ message: err});
      
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
      });
}

const createDirector = async (req, res) => {
  const director = {
    name: req.body.name,
    nationality: req.body.nationality, 
    dob: req.body.dob,
    awards: [
      {
        awardName: req.body.awardName,
        year: req.body.year,
        movie: req.body.movie,
      }
    ],
    moviesDirected: [req.body.moviesDirected],
  };
  const response = await mongodb.getDb().db().collection('directors').insertOne(director);
  if(response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred trying to create the new director.');
  }
};

const updateDirector = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('You need a vaild id to update a director.')
  }
  const userId = new ObjectId(req.params.id);
  const director = {
      name: req.body.name,
      nationality: req.body.nationality, 
      dob: req.body.dob,
      awards: [
        {
          awardName: req.body.awardName,
          year: req.body.year,
          movie: req.body.movie,
        }
      ],
      moviesDirected: [req.body.moviesDirected],
    };


  const response = await mongodb.getDb().db().collection('directors').replaceOne({_id: userId}, director);
  console.log(response);
    if(response.modifiedCount > 0){
      res.status(204).send();

    } else {
      res.status(500).json(response.error || 'An error occurred trying to update a director.');
    }
};

const deleteDirector = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('You need a valid id to delete a director');
  }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('directors').deleteOne({_id: userId}, true);
    console.log(response);
      if(response.deletedCount > 0){
        res.status(200).send();
  
      } else {
        res.status(500).json(response.error || 'An error occurred trying to delete a director.');
      }

};


module.exports = {
  getAll,
  getSingle,
  createDirector,
  updateDirector,
  deleteDirector,
  
};