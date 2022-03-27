module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        name: 'Gustavo Faria',
        email: 'fariaguga@hotmail.com',
        wpp: '15991274518',
        music: 'É só chegar',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};