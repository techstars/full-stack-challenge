'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Founders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Founders.init({
    Name: DataTypes.STRING,
    Title: DataTypes.STRING,
    Company: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Founders',
  });
  return Founders;
};