"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("products_prices", [{
                harga_jual: "100000",
                products_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                harga_jual: "200000",
                products_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("products_prices", null, {});
    },
};