"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("resellers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            shoppe_link: {
                type: Sequelize.STRING,
            },
            tokped_link: {
                type: Sequelize.STRING,
            },
            bukalapak_link: {
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
        await queryInterface.dropTable("resellers");
    },
};