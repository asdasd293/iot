'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissions', [
      {
        name: 'Pi Management',
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'User Management',
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'Area Management',
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissions', null, {})
  }
};
