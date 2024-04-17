'use strict';

const { PROVEEDOR_TABLE } = require('./../models/proveedor.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(PROVEEDOR_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      razon_social: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PROVEEDOR_TABLE);
  }
};
