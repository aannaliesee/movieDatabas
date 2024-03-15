const express = require('express');
const router = express.Router();

const movieController = require('../controllers/moviesController');

//get all movies
router.get('/', movieController.getMovies);
//get movie by Id
router.get('/:id', movieController.getMovieById);
//add new movie
router.post('/', movieController.addMovie);
//update or edit movie
router.put('/:id', movieController.updateMovie);
//delete movie
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
