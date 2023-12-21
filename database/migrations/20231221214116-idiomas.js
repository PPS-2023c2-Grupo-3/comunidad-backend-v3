'use strict';

const {DataTypes} = require("sequelize");
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.createTable('idiomas_postulantes',{
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          fk_id_idioma: DataTypes.INTEGER,
          fk_id_postulante: DataTypes.INTEGER,
          fk_id_nivel: DataTypes.INTEGER
        }),
        queryInterface.createTable('idiomas_ofertas',{
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          fk_id_idioma: DataTypes.INTEGER,
          fk_id_postulante: DataTypes.INTEGER,
          fk_id_nivel: DataTypes.INTEGER
        }),
        queryInterface.createTable('idiomas',{
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          fk_id_idioma: DataTypes.INTEGER,
          fk_id_postulante: DataTypes.INTEGER,
          fk_id_nivel: DataTypes.INTEGER
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.dropTable('idiomas_oferta'),
        queryInterface.dropTable('idiomas_postulantes'),
        queryInterface.dropTable('idiomas')
    ])
  }
};
