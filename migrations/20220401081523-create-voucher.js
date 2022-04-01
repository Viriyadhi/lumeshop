"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("vouchers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            code: {
                type: Sequelize.INTEGER,
            },
            type: {
                type: Sequelize.ENUM("STORE", "PRODUCT"),
            },
            expired_at: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable("vouchers");
    },
};