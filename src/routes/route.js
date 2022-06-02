const express = require('express');
const router = express.Router();
const welcomeFunction = require('../logger/logger.js')
const todayDate = require('../util/helper.js')

router.get('/test-me', function (req, res) {
    welcomeFunction.welcome()
    todayDate.date()
    todayDate.month()
    todayDate.batchInfo()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason