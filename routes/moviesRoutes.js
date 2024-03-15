const express = require('express')
const router = express.Router();
const movieControll = require('../controllers/moviesController');

router.get('/', movieControll.getAll);
router.get('/:id', movieControll.getSingle);
router.get('/', movieControll.createMovie);
router.get('/:id', movieControll.updateMovie);
router.get('/:id', movieControll.deleteMovie);

module.exports = router;