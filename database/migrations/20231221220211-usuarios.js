'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('usuarios',{
     id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     fk_id_grupo: DataTypes.INTEGER,
     usuario: DataTypes.STRING,
     password: DataTypes.STRING,
     estado: DataTypes.BOOLEAN
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('usuarios')
  }
};
