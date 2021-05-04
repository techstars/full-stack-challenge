const locationsModel = require('./locations')

module.exports = (sequelize, DataTypes) => {
    const Companies = sequelize.define('Companies', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Founded: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    })
    Companies.associate = (models) => {
        Companies.hasOne(models.Locations, {
            as: "Location",
            foreignKey: "Location"
        })
    }
    return Companies;
}