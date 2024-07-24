const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Payment extends Model {}

Payment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paidDate: {
    type: DataTypes.DATE,
  },
  deposit: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  sequelize,
  modelName: 'Payment',
  paranoid: true,
});

Payment.associate = (models) => {
  Payment.belongsTo(models.Order);
};

module.exports = Payment;
