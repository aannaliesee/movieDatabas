const express = require('express')
const router = express.Router();
const movieControll = require('../controllers/moviesController');
const { requiresAuth } = require("express-openid-connect");


router.get('/', movieControll.getAll);
router.get('/:id', movieControll.getMovieById);
router.post('/', movieControll.postMovie);
router.put('/:id', movieControll.putMovie);
router.delete('/:id', movieControll.deleteMovie);

module.exports = router;