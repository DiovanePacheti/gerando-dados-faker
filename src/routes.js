const express = require('express');

const ClientController = require('./controllers/ClientController');

const routes = express.Router();

routes.get('/cliente', ClientController.index);

module.exports = routes;