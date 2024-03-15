const express = require('express')
const router = express.Router();
const directorControll = require('../controllers/directorsController');

router.get('/', directorControll.getAll);

module.exports = router;
