"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("payment_methods", [{
                jenis_pembayaran: "Transfer Bank",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                jenis_pembayaran: "Cash",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                jenis_pembayaran: "Kredit",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("payment_methods", null, {});
    },
};