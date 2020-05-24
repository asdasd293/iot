const db = require("../../models");

const Area = db.areas;
const Pi = db.pis;

module.exports = function findOne(req, res) {
  const param = req.params;
  // var condition = query ? { title: { [Op.like]: `%${title}%` } } : null;

  Area.findByPk(param.id, {
    attributes: ['id', 'name', 'lat', 'long', 'created'],
    include: [
      {
        model: Pi,
        attributes: ['id', 'pi_id_addr', 'address', 'lat', 'long'],
        as: 'pis'
      }
    ]
  }).then(data => {
      const convert = {
        id: data.id,
        name: data.name,
        lat: data.lat,
        long: data.long,
        created: data.created,
        pis: data.pis.map(el => ({
          id: el.id,
          pi_id_addr: el.pi_id_addr,
          address: el.address,
          lat: el.lat,
          long: el.long
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