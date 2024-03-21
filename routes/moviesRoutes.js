const express = require('express')
const router = express.Router();
const movieControll = require('../controllers/moviesController');

router.get('/', movieControll.getAll);
// router.get('/:id', movieControll.getSingle);
// router.post('/', movieControll.createMovie);
// router.put('/:id', movieControll.updateMovie);
// router.delete('/:id', movieControll.deleteMovie);

module.exports = router;