const express = require('express');
const router = express.Router();
const adminController = require('../contorllers/adminController');

router.post('/add-content', adminController.postContent);
router.get('/', adminController.admin);

module.exports = router;
