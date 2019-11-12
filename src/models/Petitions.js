const {Model, DataTypes} = require('sequelize');

class Petitions extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            desc: DataTypes.STRING,
            qtAss: DataTypes.INTEGER,
            image: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Petitions;