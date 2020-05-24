var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const Pi = sequelize.define("pis", {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    pi_id_addr: {               
      type: DataTypes.STRING(20),
    },
    address: {                
      type: DataTypes.STRING(255),
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

  Pi.associate = function(models) {
    Pi.hasMany(models.env_params);
    Pi.belongsToMany(models.sensors, { foreignKey: 'sensor_id', through: models.pi_sensors, as: 'sensors' });
    Pi.belongsToMany(models.areas, { foreignKey: 'area_id', through: models.area_pis, as: 'area' });
  };

  return Pi
};