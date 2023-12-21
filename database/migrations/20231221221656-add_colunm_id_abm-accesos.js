'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.addColumn('abm', 'id',{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }),
        queryInterface.addColumn('accesos', 'id',{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
        queryInterface.removeColumn('abm', 'id'),
        queryInterface.removeColumn('accesos', 'id')
    ])
  }
};
