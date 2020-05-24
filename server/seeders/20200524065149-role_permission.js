'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role_permissions', [
      {
        role_id: 1,
        permission_id: 1
      },
      {
        role_id: 1,
        permission_id: 2
      },
      {
        role_id: 1,
        permission_id: 3
      },
      {
        role_id: 2,
        permission_id: 1
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role_permissions', null, {})
  }
};
