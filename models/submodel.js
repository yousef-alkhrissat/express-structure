const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Submodel extends Model {}

Submodel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Submodel',
  paranoid: true,
});

Submodel.associate = (models) => {
  Submodel.belongsTo(models.Model);
  Submodel.hasMany(models.Car);
};

module.exports = Submodel;
