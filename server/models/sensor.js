var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const Sensor = sequelize.define("sensors", {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50)
    },
    type: {
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

  Sensor.associate = function(models) {
    Sensor.belongsToMany(models.pis, { foreignKey: 'pi_id', through: models.pi_sensors, as: 'pis' });
  };

  return Sensor
};