const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/moviesController', require('./moviesRoutes'));
router.use('/genresController', require('./genresRoutes'));
router.use('/directorsController', require('./directorsRoutes'));
router.use('/tmoatController', require('./tmoatRoutes'));

module.exports = router
