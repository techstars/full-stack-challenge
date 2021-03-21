'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Companies.init({
    Name: DataTypes.STRING,
    Location: DataTypes.STRING,
    Description: DataTypes.STRING,
    Founded: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};