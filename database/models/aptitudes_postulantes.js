'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aptitudes_postulantes extends Model {
    static associate(models) {
      // define association here
    }
  }
  aptitudes_postulantes.init({
    fk_id_aptitud: DataTypes.INTEGER,
    fk_id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'aptitudes_postulantes',
  });
  return aptitudes_postulantes;
};