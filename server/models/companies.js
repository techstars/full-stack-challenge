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
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    description: DataTypes.STRING(5048),
    founded: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};