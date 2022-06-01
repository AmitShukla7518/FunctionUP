const express = require('express');
// const externalModule = require('./logger')
// const externalModule = require('../logger/logger')
const Module1 = require('../logger/logger')
const Module2 = require('../util/helper')
const Module3 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    
res.send('My first ever api!')
    Module1.hello()
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
Module2.Date()
Module2.Month()
Module2.Info()

});

router.get('/test-me2', function (req, res) {

    res.send('My third api!')
    Module3.trimm()
    Module3.lower()
    Module3.upper()
});
module.exports = router;
// adding this comment for no reason