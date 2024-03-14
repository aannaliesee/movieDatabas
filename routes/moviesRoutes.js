const express = require('express')
const router = express.Router();
const movieControll = require('../controllers/moviesController');

router.get('/', movieControll.getAll);

module.exports = router;