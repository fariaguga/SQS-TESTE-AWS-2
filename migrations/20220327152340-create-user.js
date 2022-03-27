'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type:Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      wpp: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      music: {
        type:Sequelize.STRING,
        allowNull: false,
      },

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
