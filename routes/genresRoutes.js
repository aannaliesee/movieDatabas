const express = require('express')
const router = express.Router();
const genreControll = require('../controllers/genresController');

router.get('/', genreControll.getAll);
router.get('/:id', genreControll.getGenresById);
router.post('/', genreControll.createGenre);
router.put('/:id', genreControll.updateGenre);
router.delete('/:id', genreControll.deleteGenre);

module.exports = router;