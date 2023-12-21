'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
   return Promise.all([
       queryInterface.createTable('aptitudes_postulantes',{
         id:{
           type: DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
         },
         fk_id_aptitud: DataTypes.INTEGER,
         fk_id_usuario: DataTypes.INTEGER
       }),
       queryInterface.createTable('aptitudes_oferta',{
         id:{
           type: DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
         },
         fk_id_aptitud: DataTypes.INTEGER,
         fk_id_oferta: DataTypes.INTEGER
       }),
       queryInterface.createTable('aptitudes',{
         id:{
           type: DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
         },
         nombre_aptitud: DataTypes.STRING,
         descripcion: DataTypes.STRING
       })
   ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.dropTable('aptitudes_postulantes'),
        queryInterface.dropTable('aptitudes_oferta'),
        queryInterface.dropTable('aptitudes')
    ])
  }
};
