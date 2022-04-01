"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("payment_methods", [{
                nama: "BCA",
                nomor_rekening: "123456789",
                nama_rekening: "PT. BCA",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nama: "BNI",
                nomor_rekening: "123456789",
                nama_rekening: "PT. BNI",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nama: "BRI",
                nomor_rekening: "123456789",
                nama_rekening: "PT. BRI",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("payment_methods", null, {});
    },
};