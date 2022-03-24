"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class addresses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    addresses.init({
        provinsi: DataTypes.STRING,
        kota: DataTypes.STRING,
        kecamatan: DataTypes.STRING,
        kelurahan_desa: DataTypes.STRING,
        jalan: DataTypes.STRING,
        kode_pos: DataTypes.INTEGER,
        nama_alamat: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "addresses",
    });
    return addresses;
};