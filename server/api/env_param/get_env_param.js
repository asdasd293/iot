const db = require("../../models");

const EnvParam = db.env_params;
const Pi = db.pis;

module.exports = function findOne(req, res) {
  const param = req.params;

  EnvParam.findByPk(param.id, { 
    attributes: ['tem', 'hum', 'air', 'created'],
    include: [
      {
        model: Pi,
        attributes: ['id', 'pi_id_addr', 'address', 'lat', 'long']
      }
    ],
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