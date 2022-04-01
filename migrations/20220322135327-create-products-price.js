"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("products_prices", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            price: {
                type: Sequelize.STRING,
            },
            buy_price: {
                type: Sequelize.STRING,
            },
            publish_price: {
                type: Sequelize.STRING,
            },
            price_type: {
                type: Sequelize.ENUM("retail", "wholesale"),
            },
            products_id: {
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
        await queryInterface.dropTable("products_prices");
    },
};