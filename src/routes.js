const express = require('express');
const UserController = require('./controllers/UserController');
const PetitionsController = require('./controllers/PetitionsController');
const Multer = require('./config/multer');
const {verifyJWT} = require('./midware/JWT');

const routes = express.Router();

routes.all('/*', verifyJWT);

routes.post('/users', UserController.store);
routes.post('/users/login', UserController.login);
routes.post('/users/addBiometry', Multer.single('file'), UserController.addBiometry);
routes.post('/petitions', PetitionsController.createPetition);
routes.get('/petitions', PetitionsController.getPetitions);

module.exports = routes; 