"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("addresses", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            provinsi: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            kota: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            kecamatan: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            kelurahan_desa: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            jalan: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            kode_pos: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            nama_alamat: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            user_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("addresses");
    },
};