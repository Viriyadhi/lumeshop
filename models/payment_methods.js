'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_methods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_methods.init({
    jenis_pembayaran_1: DataTypes.STRING,
    jenis_pembayaran_2: DataTypes.STRING,
    jenis_pembayaran_3: DataTypes.STRING,
    jenis_pembayaran_4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_methods',
  });
  return payment_methods;
};