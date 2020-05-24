'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pi_sensors', [
      {
        pi_id: 1,
        sensor_id: 1,
        status: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        pi_id: 1,
        sensor_id: 2,
        status: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        pi_id: 1,
        sensor_id: 3,
        status: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        pi_id: 2,
        sensor_id: 1,
        status: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        pi_id: 2,
        sensor_id: 2,
        status: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        pi_id: 2,
        sensor_id: 3,
        status: 1,
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pi_sensors', null, {})
  }
};
