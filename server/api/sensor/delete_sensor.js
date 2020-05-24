const db = require("../../models");

const Sensor = db.sensors;
const PiSensor = db.pi_sensors;

module.exports = async function deleteSensor(req, res) {
  const param = req.params

  await PiSensor.destroy({
    where: {
      sensor_id: param.id
    }
  })
  
  Sensor.update({ deleted: true }, { 
    where: {
      id: param.id
    }
  }).then(data => {
      res.send({data: data});
    })
    .catch(err => {
      res.status(500).send({
        error: {
          message: err.message || "Some error occurred while retrieving env param."
        }
      });
    });
};