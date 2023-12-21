'use strict';

const {DataTypes} = require("sequelize");
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('ciudades',{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING,
      fk_id_provincia: DataTypes.INTEGER
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('ciudades')
  }
};
