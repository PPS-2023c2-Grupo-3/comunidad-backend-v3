'use strict';


const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('ciudades','fk_id_provincias',{
      type: DataTypes.INTEGER,
      references:{
        model: 'provincias',
        key: 'id'
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
  }
};
