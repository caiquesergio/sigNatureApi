const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            genre: DataTypes.STRING,
            //Sun Nov 10 2019 22:46:09 GMT-0200 (GMT-02:00) ->
            birth: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = User;