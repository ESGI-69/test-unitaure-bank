'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Account, {
        foreignKey: 'userId',
        as: 'accounts',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};