"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("categories", [{
                category: "Electronics",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                category: "Fashion",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                category: "Home & Garden",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("categories", null, {});
    },
};