const express = require('express');
const {userList, getUser} = require('../controller/user.controller.js');

const router = express.Router();

router.get("/users", userList);


router.get("/user/:id", getUser);


module.exports = router;
