const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Role extends Model {}

Role.init({
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
  modelName: 'Role',
  paranoid: true,
});

Role.associate = (models) => {
  Role.belongsToMany(models.User, { through: 'UserRole' });
};

module.exports = Role;
