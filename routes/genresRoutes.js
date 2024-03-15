const express = require('express')
const router = express.Router();
const genreControll = require('../controllers/genresController');

router.get('/', genreControll.getAll);
// router.get('/:id', genreControll.getSingle);
// router.get('/', genreControll.createGenre);
// router.get('/:id', genreControll.updateGenre);
// router.get('/:id', genreControll.deleteGenre);

module.exports = router;