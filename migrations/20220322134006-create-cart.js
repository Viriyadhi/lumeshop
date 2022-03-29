"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("carts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            products_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: "products",
                    key: "id",
                },
            },
            user_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: "users",
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
        await queryInterface.dropTable("carts");
    },
};