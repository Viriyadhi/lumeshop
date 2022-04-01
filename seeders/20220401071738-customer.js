"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("customers", [{
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("customers", null, {});
    },
};