'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class has_voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.voucher, {as : 'voucher'})
      this.belongsTo(models.customer, {as : 'user'})
      this.belongsTo(models.reseller, {as : 'reseller'})
    }
  }
  has_voucher.init({
    customer_id: DataTypes.INTEGER,
    reseller_id: DataTypes.INTEGER,
    voucher_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'has_voucher',
  });
  return has_voucher;
};