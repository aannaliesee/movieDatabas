const express = require('express')
const router = express.Router();
const genreControll = require('../controllers/genresController');
const { requiresAuth } = require("express-openid-connect");


router.get('/', requiresAuth(), genreControll.getAll);
router.get('/:id', genreControll.getGenresById);
router.post('/', genreControll.createGenre);
router.put('/:id', genreControll.updateGenre);
router.delete('/:id', genreControll.deleteGenre);

module.exports = router;