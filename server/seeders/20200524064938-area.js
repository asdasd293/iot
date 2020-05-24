'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('areas', [
      {
        name: 'Hai Bà Trưng',
        lat: '21.009138',
        long: '105.853644',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('areas', null, {})
  }
};
