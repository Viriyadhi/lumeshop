"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("carts", [{
                products_id: 1,
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                products_id: 2,
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                products_id: 3,
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("carts", null, {});
    },
};