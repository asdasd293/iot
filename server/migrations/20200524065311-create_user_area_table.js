'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_areas', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      area_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'areas',
          key: 'id'
        }
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_areas')
  }
};
