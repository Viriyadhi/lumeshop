"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("orders", [{
                jumlah: 1,
                jumlah_harga: 100000,
                cart_id: 1,
                user_id: 1,
                coins_value: 1,
                shipping_cargos_id: 1,
                addresses_id: 1,
                jenis_pembayaran_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                jumlah: 20,
                jumlah_harga: 2000000,
                cart_id: 2,
                user_id: 2,
                coins_value: 2,
                shipping_cargos_id: 2,
                addresses_id: 2,
                jenis_pembayaran_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("orders", null, {});
    },
};