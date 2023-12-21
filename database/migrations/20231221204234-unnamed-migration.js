'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('accesos',{
     fk_id_grupo: DataTypes.INTEGER,
     usuario_mail: DataTypes.STRING,
     password: DataTypes.STRING,
     hash: DataTypes.STRING,
     estado: DataTypes.BOOLEAN
   })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('accesos')
  }
};
