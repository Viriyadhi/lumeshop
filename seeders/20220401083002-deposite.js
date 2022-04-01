"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("deposites", [{
                reseller_id: 1,
                mount: 100,
                payment_id: 1,
                is_verified: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                reseller_id: 2,
                mount: 200,
                payment_id: 2,
                is_verified: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("deposites", null, {});
    },
};