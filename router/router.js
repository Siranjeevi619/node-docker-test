const express = require('express');
const getUser = require('../controller/user.controller.js');

const router = express.Router();

router.get("/user", getUser);

module.exports = router;
