const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Specification extends Model {}

Specification.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCost: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  sequelize,
  modelName: 'Specification',
  paranoid: true,
});

Specification.associate = (models) => {
  Specification.belongsTo(models.Car);
};

module.exports = Specification;
