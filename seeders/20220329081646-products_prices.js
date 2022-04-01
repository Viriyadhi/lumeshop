"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("products_prices", [{
                price: "100",
                buy_price: "100",
                publish_price: "100",
                price_type: "retail",
                products_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                price: "200",
                buy_price: "180",
                publish_price: "200",
                price_type: "wholesale",
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