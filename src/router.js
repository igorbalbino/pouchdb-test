var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time now: ', Date.now());
    next();
});


// Define the home page route
router.get('/', function(req, res) {
    res.sendFile(__dirname + '\\public\\index.html');
});

module.exports = router;