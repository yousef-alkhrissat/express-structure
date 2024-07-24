const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user');
const Role = require('./role');
const UserRole = require('./userRole');
const CarModel = require('./model');
const Submodel = require('./submodel');
const Car = require('./car');
const Specification = require('./specification');
const Order = require('./order');
const Payment = require('./payment');
const Notification = require('./notification');
const models = {
  User: new User(sequelize),
  Role: new Role(sequelize),
  UserRole: new UserRole(sequelize),
  CarModel: new CarModel(sequelize),
  Submodel: new Submodel(sequelize),
  Car: new Car(sequelize),
  Specification: new Specification(sequelize),
  Order: new Order(sequelize),
  Payment: new Payment(sequelize),
  Notification: new Notification(sequelize),
}
// Set up associations
User.hasMany(Role);
User.hasMany(Notification);
UserRole.hasOne(User);
UserRole.hasOne(Role);
CarModel.hasMany(Submodel);
Submodel.hasOne(CarModel);
Submodel.hasMany(Car);
Car.hasOne(Submodel);
Car.hasMany(Specification);
Car.hasMany(Order);
Specification.hasOne(Car);
Order.hasOne(Car);
Order.hasMany(Payment);
Payment.hasOne(Order);
Notification.hasOne(User);

module.exports = {
  sequelize,
  ...models,
};
