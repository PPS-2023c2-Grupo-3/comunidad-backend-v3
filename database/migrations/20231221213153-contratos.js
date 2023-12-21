'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('contratos',{
     id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     tipo_contrato: DataTypes.STRING
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('contratos')
  }
};
