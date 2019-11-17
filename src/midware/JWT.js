require("dotenv-safe").config({silent: true});
const jwt = require('jsonwebtoken');

function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {
        expiresIn: 500000 // expires in 5min
    });
}

function verifyJWT(req, res, next) {
    if (req.url === '/users/login' || req.url === '/login') return next();

    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({auth: false, message: 'No token provided.'});

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}

module.exports = {
    verifyJWT,
    createJWT
};