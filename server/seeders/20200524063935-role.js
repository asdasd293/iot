'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
        color: '#696969',
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'Pi Management',
        color: '#f1f1f1',
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {})
  }
};
