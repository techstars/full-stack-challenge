const companyModel = require('./companies')

module.exports = (sequelize, DataTypes) => {
    const Founders = sequelize.define('Founders', {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Title: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Company: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
    Founders.associate = (models) => {
        Founders.belongsTo(models.Companies, {
            as: 'company',
            foreignKey: 'Company'
        })
    }
    return Founders;
}