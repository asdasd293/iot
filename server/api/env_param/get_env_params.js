const db = require("../../models");
const Op = db.Sequelize.Op;

const EnvParam = db.env_params;
const Pi = db.pis;

module.exports = function findAll(req, res) {
  const query = req.query;
  // var condition = query ? { title: { [Op.like]: `%${title}%` } } : null;
  var condition = null

  EnvParam.findAll({ 
    attributes: ['id', 'tem', 'hum', 'air', 'created'],
    include: [
      {
        model: Pi,
        as: 'pi',
        attributes: ['id', 'pi_id_addr', 'address', 'lat', 'long']
      }
    ],
    where: condition
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