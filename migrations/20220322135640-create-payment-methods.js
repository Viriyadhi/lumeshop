"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("payment_methods", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nama: {
                type: Sequelize.STRING,
            },
            nomor_rekening: {
                type: Sequelize.STRING,
            },
            nama_rekening: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("payment_methods");
    },
};