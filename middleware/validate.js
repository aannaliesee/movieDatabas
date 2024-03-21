const validator = require("../helpers/validate");

const handleValidation = (req, res, next, validationRule) => {
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
};
  

const validateDirectors = (req, res, next) => {
    const validationRule = {
        name: 'required|string', //required
        nationality: 'required|string', //required
        dob: 'required|integer|min:1', //required
        awards: 'string', // not required not all may have awards
        'awards.awardName': 'string',
        'awards.year': 'interger|min:1',
        'awards.movie': 'string',
        moviesDirected: 'required|string|array' // required Allow both string and array types 
    }
    handleValidation(req, res, next, validationRule);
};

const validateGenres = (req, res, next) => {
    const validationRule = {
        genre: 'required|string',
        title: 'required|string',
        directors: 'required|string|array', // required, allow both string and array
        actors: 'required|array', // required
        'actors.name': 'string',
        'actors.role': 'string',
        subgenre: 'array', // not required
        releaseYear: 'required|integer|min:1800|max:2025', // allow only integers between 1800-2025
        ratings: 'required|string', // required
        runtime: 'string', //not required            
        productionCo: 'string', //not required
        plotSummary: 'string' // not required
    
        }
   handleValidation(req, res, next, validationRule);
};

const validateMovies = (req, res, next) => {
    const validationRule = {
        title: 'required|string',
        directors: 'required|string|array', // required, allow both string and array
        actors: 'required|array', // required
        'actors.name': 'string',
        'actors.role': 'string',
        genre: 'required|string',
        subgenre: 'array', // not required
        releaseYear: 'required|integer|min:1800|max:2025', // allow only integers between 1800-2025
        ratings: 'required|string', // required
        runtime: 'string', //not required            
        productionCo: 'string', //not required
        plotSummary: 'string' // not required
    }

    handleValidation(req, res, next, validationRule);
};
const validateTMOAT = (req, res, next) => {
    const validationRule = {
        title: 'required|string',
        year: 'required|integer|min:1800|max:2025', // allow only integers between 1800-2025
        source: 'required|string', // required
        authority: 'string', //not required            
        productionCo: 'string', //not required
        rank: 'required|integer|min:1',
        plotSummary: 'string' // not required

    }

    handleValidation(req, res, next, validationRule);
};


module.exports = {
    validateDirectors,
    validateGenres,
    validateMovies,
    validateTMOAT
};
