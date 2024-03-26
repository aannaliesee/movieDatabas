const express = require('express')
const router = express.Router();
const movieControll = require('../controllers/moviesController');
const validate = require('../middleware/validate');
const { requiresAuth } = require("express-openid-connect");


router.get('/', movieControll.getAll);
router.get('/:id', movieControll.getMovieById);
router.post('/', validate.validateMovies, movieControll.postMovie);
router.put('/:id', validate.validateMovies, movieControll.putMovie);
router.delete('/:id', movieControll.deleteMovie);


module.exports = router;