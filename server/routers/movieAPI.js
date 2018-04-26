const axios = require('axios');
const data = require('../sample-data');
const genres = require('../genres');
const express = require('express');
const router = express.Router();

/**
 * Returns latest movies from API
 * Method GET: <URL>/api/movies/latest
 */
router.get('/movies/latest', (req, res) => {
    // TESTING - spoof a long response 
    setTimeout(function(){
        res.json(data);     
    }, 2000);
});

/**
 * Returns movie genre from API
 * Method GET: <URL>/api/movies/genres
 */
router.get('/movies/genres', (req, res) => {
    // TESTING - spoof a long response 
    setTimeout(function(){
        res.json(genres);     
    }, 2000);
})

module.exports = router;