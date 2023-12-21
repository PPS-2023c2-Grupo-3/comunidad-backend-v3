'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('ofertas',{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fk_id_empresa: DataTypes.BIGINT,
      fk_id_jornada: DataTypes.INTEGER,
      fk_id_contrato: DataTypes.INTEGER,
      fk_id_estudio: DataTypes.INTEGER,
      fk_id_carrera: DataTypes.INTEGER,
      fk_id_estado: DataTypes.INTEGER,
      fecha_vigencia: DataTypes.DATE,
      titulo_oferta: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      horario_laboral_desde: DataTypes.STRING,
      horario_laboral_hasta: DataTypes.STRING,
      edad_desde: DataTypes.INTEGER,
      edad_hasta: DataTypes.INTEGER,
      experiencia_previa_desc: DataTypes.STRING,
      zona_trabajo: DataTypes.STRING,
      areas_estudio: DataTypes.STRING,
      otros_detalles: DataTypes.STRING,
      beneficios: DataTypes.STRING,
      remuneracion: DataTypes.FLOAT

    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('ofertas')
  }
};
