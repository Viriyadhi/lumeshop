"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("coins", [{
                value_coins: 10000,
                customer_id: 1,
                reseller_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value_coins: 20000,
                customer_id: 1,
                reseller_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("coins", null, {});
    },
};