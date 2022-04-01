"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("favorites", [{
                products_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                products_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("favorites", null, {});
    },
};