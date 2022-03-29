"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("order_promos", [{
                used_voucher: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                used_voucher: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("order_promos", null, {});
    },
};