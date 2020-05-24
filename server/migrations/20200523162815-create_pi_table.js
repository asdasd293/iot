'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pis', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pi_id_addr: {
        type: Sequelize.STRING(20)
      },
      address: {
        type: Sequelize.STRING(255)
      },
      long: {
        type: Sequelize.STRING(20)
      },
      lat: {
        type: Sequelize.STRING(20)
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
    return queryInterface.dropTable('pis')
  }
};
