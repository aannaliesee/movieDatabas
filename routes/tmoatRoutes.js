const express = require('express')
const router = express.Router();
const topMovieControll = require('../controllers/tmoatController');

router.get('/', topMovieControll.getAll);
router.get('/:id', topMovieControll.getSingle);
router.post('/', topMovieControll.createTMOAT);
router.put('/:id', topMovieControll.updateTMOAT);
router.delete('/:id', topMovieControll.deleteTMOAT);

module.exports = router;