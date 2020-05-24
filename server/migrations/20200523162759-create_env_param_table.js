'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('env_params', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pi_id: {
        type: Sequelize.INTEGER
      },
      tem: {
        type: Sequelize.INTEGER
      },
      hum: {
        type: Sequelize.INTEGER
      },
      air: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('env_params')
  }
};
