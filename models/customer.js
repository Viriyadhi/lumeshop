"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.addresses, { as : 'addresses'})
            this.hasOne(models.coins, {as : 'coins'})
            tihs.hasMany(models.has_vouhcer, {as : 'has_voucher'})
            this.belongsTo(models.orders, {as : 'orders'})
        }
    }
    customer.init({
        user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "customer",
    });
    return customer;
};