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
      // define association here
    }
  }
  orders.init({
    jumlah: DataTypes.INTEGER,
    jumlah_harga: DataTypes.INTEGER,
    cart_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    coins_value: DataTypes.INTEGER,
    shipping_cargos_id: DataTypes.INTEGER,
    addresses_id: DataTypes.INTEGER,
    jenis_pembayaran_id: DataTypes.INTEGER,
    resi_pengiriman: DataTypes.INTEGER,
    order_promo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};