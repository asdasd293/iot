const db = require("../../models");

const Sensor = db.sensors;

module.exports = function create(req, res) {
  const body = req.body

  if (!body.name) {
    return res.status(400).send({
      error: {
        message: 'Parameters not exist.'
      }
    })
  } 
  
  const value = {
    name: body.name,
    type: body.type
  }

  Sensor.create(value)
    .then(data => {
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