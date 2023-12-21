'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
   return Promise.all([
       queryInterface.createTable('estado_postulante',{
         id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
         },
         nombre_estado: DataTypes.STRING
       }),
       queryInterface.createTable('estado_oferta',{
         id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
         },
         nombres_estado: DataTypes.STRING
       }),
       queryInterface.createTable('estado_empresas',{
         id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
         },
         nombres_estado: DataTypes.STRING
       })
   ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.dropTable('estado_empresa'),
        queryInterface.dropTable('estado_oferta'),
        queryInterface.dropTable('estado_postulante')
    ])
  }
};
