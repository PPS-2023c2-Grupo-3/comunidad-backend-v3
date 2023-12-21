'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('postulaciones',{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fk_id_postulante: DataTypes.INTEGER,
      fk_id_oferta: DataTypes.INTEGER,
      fk_id_empresa: DataTypes.BIGINT,
      contactado: DataTypes.BOOLEAN
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('postulaciones')
  }
};
