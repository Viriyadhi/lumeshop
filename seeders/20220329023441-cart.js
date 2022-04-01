"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("carts", [{
                products_id: 1,
                customer_id: 1,
                reseller_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                products_id: 2,
                customer_id: 1,
                reseller_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                products_id: 3,
                customer_id: 1,
                reseller_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("carts", null, {});
    },
};