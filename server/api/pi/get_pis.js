const db = require("../../models");
const Op = db.Sequelize.Op;

const Pi = db.pis;
const PiSensor = db.pi_sensors;
const Sensor = db.sensors;

module.exports = function findAll(req, res) {
  const query = req.query;
  // var condition = query ? { title: { [Op.like]: `%${title}%` } } : null;

  Pi.findAll({
    attributes: ['id', 'pi_id_addr', 'address', 'lat', 'long', 'created'],
    include: [
      {
        model: Sensor,
        attributes: ['id', 'name', 'type'],
        as: 'sensors'
      }
    ],
    where: {
      deleted: false
    }
  }).then(data => {
      const convert = data.map(v => ({
        id: v.id,
        pi_id_addr: v.pi_id_addr,
        address: v.address,
        lat: v.lat,
        long: v.long,
        created: v.created,
        sensors: v.sensors.map(el => ({
          id: el.id,
          name: el.name,
          type: el.type
        }))
      }))

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