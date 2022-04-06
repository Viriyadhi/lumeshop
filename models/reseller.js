"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class reseller extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.user, {as : 'user'})
            this.hasMany(models.addresses, {as : 'addresses'})
            this.hasOne(models.coins, {as : 'coins'})
            this.hasMany(models.has_voucher, {as : 'has_voucher'})
            this.belongsTo(models.orders, {as : 'orders'})
            this.hasMany(models.deposite, { as : 'deposite'})
        }
    }
    reseller.init({
        user_id: DataTypes.INTEGER,
        shoppe_link: DataTypes.STRING,
        tokped_link: DataTypes.STRING,
        bukalapak_link: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "reseller",
    });
    return reseller;
};