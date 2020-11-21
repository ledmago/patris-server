
const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const { logOut } = require('../controllers/UserController');

route.get('/', async (req, res) => {
    logOut(req, res);
});

module.exports = route;