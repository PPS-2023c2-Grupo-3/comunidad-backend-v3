'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class grupos extends Model {
    static associate(models) {
      // define association here
    }
  }
  grupos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: DataTypes.STRING
  }, {
    timestamps: true,
    sequelize,
    modelName: 'grupos',
  });
  return grupos;
};