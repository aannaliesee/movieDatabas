const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/movies', require('./moviesRoutes'));
router.use('/genres', require('./genresRoutes'));
router.use('/directors', require('./directorsRoutes'));
router.use('/tmoat', require('./tmoatRoutes'));

module.exports = router
