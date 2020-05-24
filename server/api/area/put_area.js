const db = require("../../models");
const Op = db.Sequelize.Op;

const Area = db.areas;
const AreaPi = db.area_pis;

module.exports = async function update(req, res) {
  const body = req.body;
  const param = req.params;

  if (!body.name) {
    return res.status(400).send({
      message: "Parameter not exist."
    })
  }

  // if (body.pis.length) {
  //   await AreaPi.destroy({
  //     where: {
  //       area_id: param.id
  //     }
  //   })

  //   const array = body.areas.map(v => ({
  //     area_id: param.id,
  //     pi_id: v
  //   }))

  //   await AreaPi.bulkCreate(array)
  // }

  const value = {
    name: body.name,
    lat: body.lat,
    long: body.long
  }

  Area.update(value, {
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