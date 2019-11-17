const User = require('../models/User');
const {createJWT} = require('../midware/JWT');
const Bycrpt = require('bcrypt');
const {PythonShell} = require('python-shell');

module.exports = {
    // Body = JSON usuario(andre, andre@gmail, masculino, 01011999)
    // Query localhost:3333/users&nome=andre?email....
    // header Usuario é autenticado e etc, bool, updated e etc
    async store(req, res) {
        const {name, email, genre, birth, password} = req.body;

        Bycrpt.hash(password, 10)
            .then(async function (hashedPassword) {
                const user = await User.create({name, email, genre, birth, password: hashedPassword});
                const token = createJWT(user.name);
                return res.header("x-auth-token", token).send({
                    name: user.name,
                    email: user.email
                });
            })
            .then(function () {
                res.send();
            })
            .catch(function (error) {
                return res.send(error).status(500)
            });
    },

    async login(req, res) {
        const username = req.body.email;
        const password = req.body.password;

        User.findOne({where: {email: username}})
            .then(function (user) {
                return Bycrpt.compare(password, user.password);
            })
            .then(function (samePassword) {
                if (!samePassword) res.status(403).send();
                const token = createJWT(username);
                return res.header("x-auth-token", token).send({
                    email: username
                });
            })
            .catch(function (error) {
                res.status(500).send("Invalid Password or Invalid Email")
            });
    },

    async addBiometry(req, res) {
        console.log(req.file);
        if (!req.file) {
            return res.status(500);
        }
        res.json({fileUrl: req.file.filename});
    },

    async authBiometry(req, res) {
        const options = {args: ["comando", "andre"]};

        PythonShell.run('pythun', options, function (err, results) {
            if (err) throw err;
            console.log(JSON.stringify(results[0]));
            console.log('results: %j', results);
        });
    }
};