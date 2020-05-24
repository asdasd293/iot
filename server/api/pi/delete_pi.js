const db = require("../../models");

const Pi = db.pis;

module.exports = function deletePi(req, res) {
  const param = req.params;

  Pi.update({ deleted: true }, {
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