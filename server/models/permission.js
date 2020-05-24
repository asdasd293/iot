var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const Permission = sequelize.define("permissions", {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(55),
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  });

  Permission.associate = function(models) {
    Permission.belongsToMany(models.roles, { foreignKey: 'role_id', through: models.role_permissions, as: 'roles' })
  };

  return Permission
};