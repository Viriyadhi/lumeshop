"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class products_price extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    products_price.init({
        price: DataTypes.STRING,
        buy_price: DataTypes.STRING,
        publish_price: DataTypes.STRING,
        price_type: DataTypes.ENUM("retail", "wholesale"),
        products_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "products_price",
    });
    return products_price;
};