'use strict';
const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('empresas',{
     fk_id_usuario: DataTypes.INTEGER,
     fk_id_rubro: DataTypes.INTEGER,
     fk_id_estado: DataTypes.INTEGER,
     nombre_empresa: DataTypes.STRING,
     descripcion: DataTypes.STRING,
     pais: DataTypes.STRING,
     fk_id_provincia: DataTypes.INTEGER,
     fk_id_ciudad: DataTypes.INTEGER,
     calle: DataTypes.STRING,
     nro: DataTypes.INTEGER,
     piso: DataTypes.INTEGER,
     depto: DataTypes.STRING,
     cp: DataTypes.STRING,
     telefono: DataTypes.INTEGER,
     web: DataTypes.STRING,
     nombre_representante: DataTypes.STRING,
     email_representante: DataTypes.STRING,
     logo: DataTypes.STRING,
     id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
     }
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('empresas')
  }
};
