const express = require('express');
const users = require('../db/user.js')
const getUser =  async (req, res) => {
    return res.status(200).json(users)
}

modules.export = {getUser}