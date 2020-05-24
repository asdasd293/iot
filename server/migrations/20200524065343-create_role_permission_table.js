'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role_permissions', {
      role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      permission_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'permissions',
          key: 'id'
        }
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('role_permissions')
  }
};
