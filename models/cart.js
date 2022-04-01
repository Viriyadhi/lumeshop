"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    cart.init({
        products_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
        reseller_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "cart",
    });
    return cart;
};