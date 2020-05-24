const db = require("../../models");

const User = db.users;
const UserArea = db.user_areas;

module.exports = async function deleteUser(req, res) {
  const param = req.params;

  await UserArea.destroy({
    where: {
      user_id: param.id
    }
  })

  User.update({ deleted: true }, {
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