'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos',
      [
        {
          name: 'Senin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Selasa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
