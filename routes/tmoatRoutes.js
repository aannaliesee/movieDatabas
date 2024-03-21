const express = require('express')
const router = express.Router();
const topMovieControll = require('../controllers/tmoatController');

router.get('/', topMovieControll.getAll);
router.get('/:id', topMovieControll.getSingle);
router.get('/', topMovieControll.createTMOAT);
router.get('/:id', topMovieControll.updateTMOAT);
router.get('/:id', topMovieControll.deleteTMOAT);

module.exports = router;