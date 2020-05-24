var Sequelize = require("sequelize");
const db = require("../models")

module.exports=function(sequelize, DataTypes){ 
  const AreaPi = sequelize.define("area_pis", {
    area_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'areas',
        key: 'id'
      }
    },
    pi_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      references: {
        model: 'pis',
        key: 'id'
      }
    },
  });

  return AreaPi
};