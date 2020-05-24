'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('area_pis', [
      {
        area_id: 1,
        pi_id: 1,
      },
      {
        area_id: 1,
        pi_id: 2,
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('area_pis', null, {})
  }
};
