const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Car = sequelize.define('car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
    mileage: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false},
    count_site: {type: DataTypes.INTEGER, allowNull: false},
    count_door: {type: DataTypes.INTEGER, allowNull: false},
    type_gas: {type: DataTypes.STRING, allowNull: false},
    engine: {type: DataTypes.INTEGER, allowNull: false},
    power_engine: {type: DataTypes.INTEGER, allowNull: false},
    type_of_drive: {type: DataTypes.STRING, allowNull: false},
    type_of_gearbox: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img_1: {type: DataTypes.STRING, allowNull: false},
    img_2: {type: DataTypes.STRING, allowNull: false},
    img_3: {type: DataTypes.STRING, allowNull: false},
    img_4: {type: DataTypes.STRING, allowNull: false},
    img_5: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

Car.hasMany(Type)
Type.belongsTo(Car)

Car.hasMany(Brand)
Brand.belongsTo(Car)

module.exports = {
    User,
    Car,
    Type,
    Brand
}
