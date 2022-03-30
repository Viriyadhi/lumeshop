"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("products", [{
                detail_products: "detail product",
                nama_products: "lipstik",
                category_id: 1,
                stock: 123,
                deskripsi: "ini adalah lipstik",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                detail_products: "detail product",
                nama_products: "baju",
                category_id: 2,
                stock: 123,
                deskripsi: "ini adalah baju",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("products", null, {});
    },
};