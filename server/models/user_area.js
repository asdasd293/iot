var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const UserArea = sequelize.define("user_areas", {
    user_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    area_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'areas',
        key: 'id'
      }
    },
  });

  UserArea.associate = function(models) {
    UserArea.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
    UserArea.belongsTo(models.areas, { foreignKey: 'area_id', as: 'area' });
  };

  return UserArea
};