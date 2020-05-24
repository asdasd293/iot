'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sensors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(50)
      },
      type: {
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
    return queryInterface.dropTable('sensors')
  }
};
