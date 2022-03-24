"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("addresses", [{
                provinsi: "Jawa Barat",
                kota: "Bandung",
                kecamatan: "Bandung",
                kelurahan_desa: "Bandung",
                jalan: "Jl. Bandung",
                kode_pos: "40123",
                nama_alamat: "Alamat 1",
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                provinsi: "Jawa Tengah",
                kota: "Semarang",
                kecamatan: "Semarang",
                kelurahan_desa: "Semarang",
                jalan: "Jl. Semarang",
                kode_pos: "40123",
                nama_alamat: "Alamat 2",
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                provinsi: "Jawa Timur",
                kota: "Surabaya",
                kecamatan: "Surabaya",
                kelurahan_desa: "Surabaya",
                jalan: "Jl. Surabaya",
                kode_pos: "40123",
                nama_alamat: "Alamat 1",
                user_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                provinsi: "Kalimantan Timur",
                kota: "Balikpapan",
                kecamatan: "Balikpapan",
                kelurahan_desa: "Balikpapan",
                jalan: "Jl. Balikpapan",
                kode_pos: "40123",
                nama_alamat: "Alamat 1",
                user_id: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("addresses", null, {});
    },
};