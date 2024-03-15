const express = require('express')
const router = express.Router();
const topMovieControll = require('../controllers/tmoatController');

router.get('/', topMovieControll.getAll);

module.exports = router;