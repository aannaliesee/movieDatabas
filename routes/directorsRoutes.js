const express = require('express')
const router = express.Router();
const directorControll = require('../controllers/directorsController');

router.get('/', directorControll.getAll);
router.get('/:id', directorControll.getSingle);
router.post('/', directorControll.createDirector);
router.put('/:id', directorControll.updateDirector);
router.delete('/:id', directorControll.deleteDirector);

module.exports = router;
