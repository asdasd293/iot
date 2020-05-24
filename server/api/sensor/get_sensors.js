const db = require("../../models");
const Op = db.Sequelize.Op;

const Sensor = db.sensors;

module.exports = function findAll(req, res) {
  const query = req.query;
  // var condition = query ? { title: { [Op.like]: `%${title}%` } } : null;

  Sensor.findAll({ 
    attributes: ['id', 'name', 'type']
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