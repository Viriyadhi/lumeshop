"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("promos", [{
                products_id: 1,
                value_promo: "10%",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                products_id: 2,
                value_promo: "50%",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("promos", null, {});
    },
};