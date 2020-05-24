var Sequelize = require("sequelize");
const db = require("../models")

module.exports = (sequelize, DataTypes) => { 
  const EnvParam = sequelize.define("env_params", {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    pi_id: {               
      type: DataTypes.INTEGER,
      references: {
        model: 'pis',
        key: 'id'
      }
    },
    tem: {                
      type: DataTypes.INTEGER,
    },
    hum: {                
      type: DataTypes.INTEGER,
    },
    air: {                
      type: DataTypes.INTEGER,
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

  EnvParam.associate = function(models) {
    EnvParam.belongsTo(models.pis, {foreignKey: 'pi_id', as: 'pi'});
  };

  return EnvParam
};