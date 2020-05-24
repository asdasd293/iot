const db = require("../../models");

const Area = db.areas;
const AreaPi = db.area_pis;

module.exports = async function deleteArea(req, res) {
  const param = req.params;

  await AreaPi.destroy({
    where: {
      area_id: param.id
    }
  })
  
  Area.update({ deleted: true }, {
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