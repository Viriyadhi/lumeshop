"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("customers", [{
                user_id: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_id: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("customers", null, {});
    },
};