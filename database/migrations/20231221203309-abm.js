'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('abm', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fk_id_usuario: DataTypes.INTEGER,
      id_usuario_mod: DataTypes.INTEGER,
      motivo: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.dropTable('abm')
  }
};
