const db = require("../../models");

const Area = db.areas;
const AreaPi = db.area_pis;

module.exports = function create(req, res) {
  const body = req.body;

  if (!body.name) {
    return res.status(400).send({
      message: "Parameter not exist."
    })
  }

  const value = {
    name: body.name,
    lat: body.lat,
    long: body.long
  }

  Area.create(value)
    .then(data => {
      // if (body.pis.length) {
      //   const array = body.pis.map(v => ({
      //     area_id: data.id,
      //     pi_id: v
      //   }))

      //   await AreaPi.bulkCreate(array)
      // }

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