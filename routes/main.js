const express = require('express');
const router = express.Router();
const mainController = require('../contorllers/mainController');

router.get('/', mainController.main);

module.exports = router;
