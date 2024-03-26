const express = require('express')
const router = express.Router();
const topMovieControll = require('../controllers/tmoatController');
const validate = require('../middleware/validate');
const { requiresAuth } = require("express-openid-connect");


router.get('/', topMovieControll.getAll);
router.get('/:id', topMovieControll.getSingle);
router.post('/', validate.topMovieControll.createTMOAT);
router.put('/:id', validate.topMovieControll.updateTMOAT);
router.delete('/:id', topMovieControll.deleteTMOAT);

module.exports = router;