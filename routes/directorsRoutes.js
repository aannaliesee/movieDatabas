const express = require('express')
const router = express.Router();
const directorControll = require('../controllers/directorsController');
const validate = require('../middleware/validate');
const { requiresAuth } = require("express-openid-connect");


router.get('/', directorControll.getAll);
router.get('/:id', directorControll.getSingle);
router.post('/', validate.directorControll.createDirector);
router.put('/:id', validate.directorControll.updateDirector);
router.delete('/:id', directorControll.deleteDirector);

module.exports = router;
