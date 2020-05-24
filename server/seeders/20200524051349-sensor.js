'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sensors', [
      {
        name: 'Cảm biến nhiệt độ',
        type: 'Nhiệt độ',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'Cảm biến độ ẩm',
        type: 'Độ ẩm',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
      {
        name: 'Cảm biến không khí',
        type: 'Không khí',
        deleted: 0,
        created: new Date(),
        updated: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sensors', null, {})
  }
};
