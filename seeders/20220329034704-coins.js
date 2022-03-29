"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("coins", [{
                value_coins: 10000,
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value_coins: 20000,
                user_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value_coins: 30000,
                user_id: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};