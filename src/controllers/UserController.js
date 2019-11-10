const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email, genre, birth} = req.body;

        const user = await User.create({name, email, genre, birth});

        return res.json(user);
    }
};