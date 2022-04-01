"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("has_vouchers", [{
                customer_id: 1,
                reseller_id: 1,
                voucher_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                customer_id: 2,
                reseller_id: 2,
                voucher_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("has_vouchers", null, {});
    },
};