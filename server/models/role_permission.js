var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const RolePermission = sequelize.define("role_permissions", {
    role_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'permissions',
        key: 'id'
      }
    },
  });

  return RolePermission
};