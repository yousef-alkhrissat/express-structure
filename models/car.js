const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Car extends Model {}

Car.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  saleCondition: {
    type: DataTypes.ENUM('CASH', 'INSTALLMENTS_6_MONTHS', 'INSTALLMENTS_1_YEAR'),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Car',
  paranoid: true,
});

Car.associate = (models) => {
  Car.belongsTo(models.Submodel);
  Car.hasMany(models.Specification);
  Car.hasMany(models.Order);
};

module.exports = Car;
