const express = require('express');

// Expres Router
const Router = express.Router();

// Controladores
const login = require('../controller/login.controller');

// Endpoints
Router.post('/v1/login', login.authenticateUser);

module.exports = Router;