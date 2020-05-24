'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('env_params', [
      {
        tem: 36,
        hum: 50,
        air: 40,
        pi_id: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        tem: 38,
        hum: 40,
        air: 30,
        pi_id: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        tem: 39,
        hum: 60,
        air: 50,
        pi_id: 1,
        created: new Date(),
        updated: new Date()
      },
      {
        tem: 29,
        hum: 50,
        air: 40,
        pi_id: 2,
        created: new Date(),
        updated: new Date()
      },
      {
        tem: 31,
        hum: 55,
        air: 36,
        pi_id: 2,
        created: new Date(),
        updated: new Date()
      },
      {
        tem: 35,
        hum: 60,
        air: 30,
        pi_id: 2,
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('env_params', null, {})
  }
};
