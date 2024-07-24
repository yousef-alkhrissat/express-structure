const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class CarModel extends Model {}

CarModel.init({
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
  modelName: 'Model',
  paranoid: true,
});

CarModel.associate = (models) => {
    CarModel.hasMany(models.Submodel);
};

module.exports = CarModel;
