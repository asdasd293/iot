var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    name: {               
      type: DataTypes.STRING(55),
    },
    role_id: {               
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    phone: {
      type: DataTypes.STRING(15)
    },
    email: {
      type: DataTypes.STRING(55)
    },
    address: {
      type: DataTypes.STRING(255)
    },
    deleted: {
      type: DataTypes.TINYINT,
      defaultValue: 0
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

  User.associate = function(models) {
    User.belongsTo(models.roles, { foreignKey: 'role_id', as: 'role' });
    User.belongsToMany(models.areas, { foreignKey: 'area_id', through: models.user_areas, as: 'areas' });
  };

  return User
};