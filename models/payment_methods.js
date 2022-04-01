"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class payment_methods extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    payment_methods.init({
        nama: DataTypes.STRING,
        nomor_rekening: DataTypes.STRING,
        nama_rekening: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "payment_methods",
    });
    return payment_methods;
};