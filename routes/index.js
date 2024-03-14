const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/', require('./moviesRoutes'));
router.use('/', require('./genresRoutes'));
router.use('/', require('./directorsRoutes'));
router.use('/', require('./tmoatRoutes'));

module.exports = router
