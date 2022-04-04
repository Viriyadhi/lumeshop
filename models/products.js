'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.category, {as : 'category'})
      this.hasMany(models.roduct_img, {as : 'product_img'})
      this.hasMany(models.products_price, {as : 'products_price'})
    }
  }
  products.init({
    detail_products: DataTypes.STRING,
    nama_products: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};