const express = require('express')
const router = express.Router();
const genreControll = require('../controllers/genresController');

router.get('/', genreControll.getAll);

module.exports = router;