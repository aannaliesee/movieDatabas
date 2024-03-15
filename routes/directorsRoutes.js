const express = require('express')
const router = express.Router();
const directorControll = require('../controllers/directorsController');

router.get('/', directorControll.getAll);
router.get('/:id', directorControll.getSingle);
router.get('/', directorControll.createDirector);
router.get('/:id', directorControll.updateDirector);
router.get('/:id', directorControll.deleteDirector);

module.exports = router;
