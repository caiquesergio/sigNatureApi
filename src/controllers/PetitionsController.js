const Petitions = require('../models/Petitions');

module.exports = {
    async createPetition(req, res) {
        const {name, desc, qtAss, image} = req.body;
        const petitions = await Petitions.create({name, desc, qtAss, image});

        return res.json(petitions);
    },

    async getPetitions(req, res) {
        const petitions = await Petitions.findAll();
        return res.json(petitions)
    }
};

