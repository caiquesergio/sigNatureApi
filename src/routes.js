const express = require('express');
const UserController = require('./controllers/UserController');
const PetitionsController = require('./controllers/PetitionsController');
const Multer = require('./config/multer');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/users/addBiometry', Multer.single('file'), UserController.addBiometry);
routes.post('/petitions', PetitionsController.createPetition);
routes.get('/petitions', PetitionsController.getPetitions);

module.exports = routes; 