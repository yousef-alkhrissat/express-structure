const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'User',
  paranoid: true,
});

User.associate = (models) => {
  User.belongsToMany(models.Role, { through: 'UserRole' });
  User.hasMany(models.Notification);
};

module.exports = User;
