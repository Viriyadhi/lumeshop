"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("product_imgs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            product_img: {
                type: Sequelize.STRING,
            },
            product_id: {
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
        await queryInterface.dropTable("product_imgs");
    },
};