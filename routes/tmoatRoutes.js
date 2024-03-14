const express = require('express')
const router = express.Router();
const actorControll = require('../controllers/tmoatController');

router.get('/', actorControll.getAll);

module.exports = router;