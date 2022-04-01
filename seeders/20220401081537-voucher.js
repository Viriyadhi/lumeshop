"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("vouchers", [{
                code: 123,
                type: "STORE",
                expired_at: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                code: 456,
                type: "PRODUCT",
                expired_at: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("vouchers", null, {});
    },
};