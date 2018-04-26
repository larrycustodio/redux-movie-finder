const express = require('express')
const router = express.Router()

const data = require('../sample-data');

/**
 * Returns latest movies from API
 * Method GET: <URL>/api/movies/latest
 */
router.get('/movies/latest', (req, res)=>{
    res.json(data);
})

module.exports = router;