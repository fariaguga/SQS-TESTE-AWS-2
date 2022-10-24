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

      vehicle: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      model: {
        type:Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      location: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      time: {
        type:Sequelize.STRING,
        allowNull: false,
      },

    })
  },
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
