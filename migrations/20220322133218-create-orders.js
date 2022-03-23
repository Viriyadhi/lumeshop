'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jumlah: {
        type: Sequelize.INTEGER
      },
      jumlah_harga: {
        type: Sequelize.INTEGER
      },
      cart_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      coins_value: {
        type: Sequelize.INTEGER
      },
      shipping_cargos_id: {
        type: Sequelize.INTEGER
      },
      addresses_id: {
        type: Sequelize.INTEGER
      },
      jenis_pembayaran_id: {
        type: Sequelize.INTEGER
      },
      resi_pengiriman: {
        type: Sequelize.INTEGER
      },
      order_promo_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};