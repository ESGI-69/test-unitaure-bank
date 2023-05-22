'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'UserAccount',
        foreignKey: 'accountId',
        as: 'users',
        onDelete: 'CASCADE',
      });
    }
  }
  Account.init({
    label: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};