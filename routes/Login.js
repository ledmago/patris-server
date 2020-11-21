
const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const { login } = require('../controllers/UserController');

route.post('/', async (req, res) => {
    login(req, res);
});

module.exports = route;