'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('area_pis', {
      area_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'areas',
          key: 'id'
        }
      },
      pi_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'pis',
          key: 'id'
        }
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('area_pis')
  }
};
