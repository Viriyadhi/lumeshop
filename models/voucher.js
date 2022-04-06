"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.has_voucher, {as : 'has_voucher'})
            this.hasMany(models.order_promo, {as : 'order_promo'})
        }
    }
    voucher.init({
        code: DataTypes.INTEGER,
        type: DataTypes.ENUM("STORE", "PRODUCT"),
        expired_at: DataTypes.DATE,
    }, {
        sequelize,
        modelName: "voucher",
    });
    return voucher;
};