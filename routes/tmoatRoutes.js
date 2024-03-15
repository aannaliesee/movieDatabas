const express = require('express')
const router = express.Router();
const topMovieControll = require('../controllers/tmoatController');

router.get('/', topMovieControll.getAll);
router.get('/:id', topMovieControll.getSingle);
router.get('/', topMovieControll.createMovie);
router.get('/:id', topMovieControll.updateMovie);
router.get('/:id', topMovieControll.deleteMovie);

module.exports = router;