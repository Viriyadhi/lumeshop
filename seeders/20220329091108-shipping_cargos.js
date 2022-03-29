"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("shipping_cargos", [{
                nama_kurir: "JNE",
                rate_price: "Rp. 10.000",
                estimasi_pengiriman: "1-2 hari",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nama_kurir: "POS Indonesia",
                rate_price: "Rp. 10.000",
                estimasi_pengiriman: "1-2 hari",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("shipping_cargos", null, {});
    },
};