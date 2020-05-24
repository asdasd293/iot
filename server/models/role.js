var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const Role = sequelize.define("roles", {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    name: {               
      type: DataTypes.STRING(55),
    },
    color: {               
      type: DataTypes.STRING(20),
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      allowNull: false
    }
  });

  Role.associate = function(models) {
    Role.hasMany(models.users, { foreignKey: 'role_id', as: 'users' });
    Role.belongsToMany(models.permissions, { foreignKey: 'permission_id', through: models.role_permissions, as: 'permissions' })
  };

  return Role
};