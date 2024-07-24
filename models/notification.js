const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Notification extends Model {}

Notification.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM('FIRST_REMINDER', 'SECOND_REMINDER', 'THIRD_REMINDER', 'LEGAL_ACTION_REMINDER'),
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sentDate: {
    type: DataTypes.DATE,
  }
}, {
  sequelize,
  modelName: 'Notification',
  paranoid: true,
});

Notification.associate = (models) => {
  Notification.belongsTo(models.User);
};

module.exports = Notification;
