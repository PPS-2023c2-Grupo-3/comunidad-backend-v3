'use strict';
const Carreras = require('../models/carreras')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Carreras.bulkCreate([
      {
        nombre_carrera: 'Tecnicatura en informatica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Licenciatura en informatica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Tecnicatura en laboratorio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Licenciatura en biotecnologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Tecnicatura univeristaria en gestion ambiental',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], { returning: true });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carreras', null, {});
  }
};