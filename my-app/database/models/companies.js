const locationsModel = require('./locations')

module.exports = (sequelize, DataTypes) => {
    const Companies = sequelize.define('Companies', {
        // id: {
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true,
        //     type: DataTypes.INTEGER
        //   },
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
            },
            references: {
                model: 'Locations',
                key: 'id'
            }
        },
    })
    Companies.associate = (models) => {
        Companies.belongsTo(models.Locations, {
            as: "Location",
            foreignKey: "Location"
        })}
    //     models.Locations.belongsTo(Companies)
    // }
    return Companies;
}