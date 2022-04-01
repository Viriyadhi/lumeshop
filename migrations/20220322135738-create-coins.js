"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("coins", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            value_coins: {
                type: Sequelize.INTEGER,
            },
            customer_id: {
                type: Sequelize.INTEGER,
            },
            reseller_id: {
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
        await queryInterface.dropTable("coins");
    },
};