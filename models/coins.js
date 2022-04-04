"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class coins extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.customer, {as : 'customer'})
            this.belongsTo(models.reseller, {as : 'reseller'})
        }
    }
    coins.init({
        value_coins: DataTypes.INTEGER,
        reseller_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "coins",
    });
    return coins;
};