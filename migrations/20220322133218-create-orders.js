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
                references: {
                    model: "carts",
                    key: "id",
                },
            },
            user_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            coins_value: {
                type: Sequelize.INTEGER,
                foreignkey: true,
                references: {
                    model: "coins",
                    key: "value_coins",
                },
            },
            shipping_cargos_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
                references: {
                    model: "shipping_cargos",
                    key: "id",
                },
            },
            addresses_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
                references: {
                    model: "addresses",
                    key: "id",
                },
            },
            jenis_pembayaran_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
                references: {
                    model: "payment_methods",
                    key: "id",
                },
            },
            resi_pengiriman: {
                type: Sequelize.INTEGER,
            },
            order_promo_id: {
                type: Sequelize.INTEGER,
                foreignkey: true,
                references: {
                    model: "order_promo",
                    key: "id",
                },
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