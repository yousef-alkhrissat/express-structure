const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  sequelize,
  modelName: 'Order',
  paranoid: true,
});

Order.associate = (models) => {
  Order.belongsTo(models.Car);
  Order.hasMany(models.Payment);
};

module.exports = Order;
