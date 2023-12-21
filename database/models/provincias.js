'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provincias extends Model {
    static associate(models) {
      // define association here
    }
  }
  provincias.init({
    nombre: DataTypes.STRING    
  }, {
    sequelize,
    modelName: 'provincias',
  });
  return provincias;
};