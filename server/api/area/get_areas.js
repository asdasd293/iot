const db = require("../../models");
const Op = db.Sequelize.Op;

const Area = db.areas;
const Pi = db.pis;

module.exports = function findAll(req, res) {
  const query = req.query;
  // var condition = query ? { title: { [Op.like]: `%${title}%` } } : null;

  Area.findAll({
    attributes: ['id', 'name', 'lat', 'long', 'created'],
    include: [
      {
        model: Pi,
        attributes: ['id', 'pi_id_addr', 'address', 'lat', 'long'],
        as: 'pis'
      }
    ],
    where: {
      deleted: false
    }
  }).then(data => {
    const convert = data.map(v => ({
      id: v.id,
      name: v.name,
      lat: v.lat,
      long: v.long,
      created: v.created,
      pis: v.pis.map(el => ({
        id: el.id,
        pi_id_addr: el.pi_id_addr,
        address: el.address,
        lat: el.lat,
        long: el.long
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