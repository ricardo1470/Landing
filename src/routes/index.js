const express = require('express');
const router = express.Router();

const { getinit } = require('../controller/init');

router.get('/', getinit);

module.exports = router;
