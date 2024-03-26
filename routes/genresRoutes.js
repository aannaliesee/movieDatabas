const express = require('express')
const router = express.Router();
const genreControll = require('../controllers/genresController');
const validate = require('../middleware/validate');
const { requiresAuth } = require("express-openid-connect");


router.get('/', requiresAuth(), genreControll.getAll);
router.get('/:id', genreControll.getGenresById);
router.post('/', validate.genreControll.createGenre);
router.put('/:id', validate.genreControll.updateGenre);
router.delete('/:id', genreControll.deleteGenre);

module.exports = router;