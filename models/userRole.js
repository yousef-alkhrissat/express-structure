const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class UserRole extends Model {}

UserRole.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, {
  sequelize,
  modelName: 'UserRole',
  paranoid: true,
});

module.exports = UserRole;
