"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("orders", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            jumlah: {
                type: Sequelize.INTEGER,
            },
            jumlah_harga: {
                type: Sequelize.INTEGER,
            },
            cart_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
            },
            coins_value: {
                type: Sequelize.INTEGER,
                foreignkey: true,
            },
            shipping_cargos_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
            },
            addresses_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
            },
            jenis_pembayaran_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
            },
            resi_pengiriman: {
                type: Sequelize.INTEGER,
            },
            order_promo_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("orders");
    },
};