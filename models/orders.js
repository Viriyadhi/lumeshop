'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.order_promo, {as : 'order_promo'})
      this.hasOne(models.cart, {as : 'cart'})
      this.hasOne(models.addresses, {as : 'addresses'})
      this.hasOne(models.payment_methods, {as : 'payment_methods'})
      this.hasOne(models.customer, {as : 'customer'})
      this.hasOne(models.reseller, {as : 'reseller'})
    }
  }
  orders.init({
    jumlah: DataTypes.INTEGER,
    jumlah_harga: DataTypes.INTEGER,
    cart_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    reseller_id: DataTypes.INTEGER,
    coins_value: DataTypes.INTEGER,
    shipping_cargos_id: DataTypes.INTEGER,
    addresses_id: DataTypes.INTEGER,
    payment_method_id: DataTypes.INTEGER,
    resi_pengiriman: DataTypes.INTEGER,
    order_promo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};