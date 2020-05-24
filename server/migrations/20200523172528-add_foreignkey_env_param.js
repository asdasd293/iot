'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('env_params', 'pi_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'pis',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return ueryInterface.removeConstraint('env_params', 'pi_id')
  }
};
