'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  about.init({
    desc_1: DataTypes.STRING,
    desc_2: DataTypes.STRING,
    desc_3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'about',
  });
  return about;
};