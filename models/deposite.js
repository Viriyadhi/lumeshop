"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class deposite extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    deposite.init({
        reseller_id: DataTypes.INTEGER,
        mount: DataTypes.INTEGER,
        payment_id: DataTypes.INTEGER,
        is_verified: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: "deposite",
    });
    return deposite;
};