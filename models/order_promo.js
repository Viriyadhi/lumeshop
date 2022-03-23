'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_promo.init({
    used_voucher: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_promo',
  });
  return order_promo;
};