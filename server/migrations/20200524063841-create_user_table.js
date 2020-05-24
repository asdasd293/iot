'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(20)
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      phone: {
        type: Sequelize.STRING(15)
      },
      email: {
        type: Sequelize.STRING(55)
      },
      address: {
        type: Sequelize.STRING(255)
      },
      deleted: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
