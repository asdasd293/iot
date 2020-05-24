const db = require("../../models");
const Op = db.Sequelize.Op;

const Pi = db.pis;
const PiSensor = db.pi_sensors;

module.exports = async function update(req, res) {
  const param = req.params;
  const body = req.body;

  if (!body.pi_id_addr || !body.address || !body.lat || !body.long) {
    return res.status(400).send({
      error: {
        message: 'Parameters not exist.'
      }
    })
  }

  if (body.sensors.length) {
    await PiSensor.destroy({
      where: {
        pi_id: param.id
      }
    })
    
    const array = body.sensors.map(v => ({
      pi_id: param.id,
      sensor_id: v
    }))

    await PiSensor.bulkCreate(array)
  }

  const value = {
    pi_id_addr: body.pi_id_addr,
    address: body.address,
    lat: body.lat,
    long: body.long
  }

  Pi.update(value, {
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