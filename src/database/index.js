const Sequelize = require('sequelize');
const Database = require('../config/database');

const User = require('../models/User');
const Petitions = require('../models/Petitions');

const connection = new Sequelize(Database);

User.init(connection);
Petitions.init(connection);

module.exports = connection;