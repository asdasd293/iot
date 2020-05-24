const db = require("../../models");

const Pi = db.pis;
const PiSensor = db.pi_sensors;
const Sensor = db.sensors;

module.exports = function findOne(req, res) {
  const param = req.params

  Pi.findByPk(param.id, { 
    attributes: ['id', 'pi_id_addr', 'address', 'lat', 'long', 'created'],
    include: [
      {
        model: Sensor,
        attributes: ['id', 'name', 'type'],
        as: 'sensors'
      }
    ]
  }).then(data => {
      const convert = {
        id: data.id,
        pi_id_addr: data.pi_id_addr,
        address: data.address,
        lat: data.lat,
        long: data.long,
        created: data.created,
        sensors: data.sensors.map(el => ({
          id: el.id,
          name: el.name,
          type: el.type
        }))
      }

      res.send({data: convert});
    })
    .catch(err => {
      res.status(500).send({
        error: {
          message: err.message || "Some error occurred while retrieving env param."
        }
      });
    });
};