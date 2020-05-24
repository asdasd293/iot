var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const PiSensor = sequelize.define("pi_sensors", {
    pi_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'pis',
        key: 'id'
      }
    },
    sensor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'sensors',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT
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

  return PiSensor
};