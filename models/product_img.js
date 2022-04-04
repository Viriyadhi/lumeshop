"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class product_img extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.products, { as : 'products'})
        }
    }
    product_img.init({
        product_img: DataTypes.STRING,
        product_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "product_img",
    });
    return product_img;
};