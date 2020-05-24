'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pis', [
      {
        pi_id_addr: '192.168.0.1',
        address: '123 abc, Hai Bà Trưng, Hà Nội',
        lat: '21.009138',
        long: '105.853644',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
      {
        pi_id_addr: '192.168.0.2',
        address: '123 abc, Hai Bà Trưng, Hà Nội',
        lat: '21.009138',
        long: '105.853644',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pis', null, {})
  }
};
