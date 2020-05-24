var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const Area = sequelize.define("areas", {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    name: {               
      type: DataTypes.STRING(55),
    },
    lat: {               
      type: DataTypes.STRING(20),
    },
    long: {               
      type: DataTypes.STRING(20)
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

  Area.associate = function(models) {
    Area.belongsToMany(models.users, { foreignKey: 'user_id', through: models.user_areas, as: 'user' });
    Area.belongsToMany(models.pis, { foreignKey: 'pi_id', through: models.area_pis, as: 'pis' });
  };

  return Area
};