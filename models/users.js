"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      birth_date: DataTypes.INTEGER,
      phone_number: DataTypes.STRING,
      type_role: DataTypes.ENUM("CUSTOMER", "RESELLER"),
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
