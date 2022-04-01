"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("deposites", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            reseller_id: {
                type: Sequelize.INTEGER,
            },
            mount: {
                type: Sequelize.INTEGER,
            },
            payment_id: {
                type: Sequelize.INTEGER,
            },
            is_verified: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable("deposites");
    },
};