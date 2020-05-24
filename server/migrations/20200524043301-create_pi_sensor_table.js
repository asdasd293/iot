'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pi_sensors', {
      pi_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'pis',
          key: 'id'
        }
      },
      sensor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'sensors',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.TINYINT
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
    return queryInterface.dropTable('pi_sensors')
  }
};
