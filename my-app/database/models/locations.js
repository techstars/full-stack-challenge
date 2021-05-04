const companiesModel = require('./companies')

module.exports = (sequelize, DataTypes) => {
    const Locations = sequelize.define('Locations', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
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
    // Locations.hasOne(models.Companies, {
    //     as: "Location",
    //     foreignKey: "Location"
    // })
    // Locations.associate = (models) => {
    //     Locations.belongsTo(models.Companies)
    // }
    return Locations;
}