const db = require("../../models");

const Sensor = db.sensors;

module.exports = function findOne(req, res) {
  const param = req.params
  
  Sensor.findByPk(param.id, { 
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