"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("order_promos", [{
                store_voucher_id: 1,
                product_voucher_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                store_voucher_id: 1,
                product_voucher_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("order_promos", null, {});
    },
};