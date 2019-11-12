const User = require('../models/User');

module.exports = {
    // Body = JSON usuario(andre, andre@gmail, masculino, 01011999)
    // Query localhost:3333/users&nome=andre?email....
    // header Usuario é autenticado e etc, bool, updated e etc
    async store(req, res) {
        const { name, email, genre, birth } = req.body;
        console.log(req);
        const user = await User.create({name, email, genre, birth});

        return res.json(user);
    }
};