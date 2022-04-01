"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("order_promos", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            store_voucher_id: {
                type: Sequelize.INTEGER,
            },
            product_voucher_id: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("order_promos");
    },
};