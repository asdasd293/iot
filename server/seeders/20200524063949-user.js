'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Nguyen Quan',
        role_id: 1,
        phone: '0123456789',
        email: 'quan@gmail.com',
        address: '123 abc, Hoàng Mai, Hà Nội',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'Nguyen Tung',
        role_id: 1,
        phone: '0123456789',
        email: 'tung@gmail.com',
        address: '123 abc, Linh Đàm, Hà Nội',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'To Lan',
        role_id: 1,
        phone: '0123456789',
        email: 'lan@gmail.com',
        address: '123 abc, Hà Đông, Hà Nội',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'Ta Nhat',
        role_id: 1,
        phone: '0123456789',
        email: 'nhat@gmail.com',
        address: '123 abc, Xã Đàn, Hà Nội',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
