'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('postulantes', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fk_id_tipo_documento: DataTypes.INTEGER,
      fk_id_usuario: DataTypes.INTEGER,
      fk_id_estudios: DataTypes.INTEGER,
      fk_id_carrera: DataTypes.INTEGER,
      fk_id_estado: DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      nacionalidad: DataTypes.STRING,
      fecha_nac: DataTypes.DATE,
      pais: DataTypes.STRING,
      fk_id_provincia: DataTypes.INTEGER,
      fk_id_ciudad: DataTypes.INTEGER,
      calle: DataTypes.STRING,
      nro: DataTypes.INTEGER,
      piso: DataTypes.INTEGER,
      depto: DataTypes.STRING,
      cp: DataTypes.STRING,
      telefono: DataTypes.INTEGER,
      cant_materias: DataTypes.INTEGER,
      alumno_unahur: DataTypes.BOOLEAN,
      presentacion: DataTypes.STRING,
      cv: DataTypes.STRING,
      foto: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('postulantes')
  }
};
