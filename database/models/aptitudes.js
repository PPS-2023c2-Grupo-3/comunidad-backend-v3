'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aptitudes extends Model {
    static associate(models) {
      // define association here
    }
  }
  aptitudes.init({
    nombre_aptitud: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'aptitudes',
  });
  return aptitudes;
};