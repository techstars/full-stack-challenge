const companiesModel = require('./companies')

module.exports = (sequelize, DataTypes) => {
    const Locations = sequelize.define('Locations', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
    return Locations;
}