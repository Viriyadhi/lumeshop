'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shipping_cargo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shipping_cargo.init({
    nama_kurir: DataTypes.STRING,
    rate_price: DataTypes.STRING,
    estimasi_pengiriman: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shipping_cargo',
  });
  return shipping_cargo;
};