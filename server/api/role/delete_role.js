const db = require("../../models");

const Role = db.roles;
const User = db.users;
const RolePermission = db.role_permissions;

module.exports = async function deleteRole(req, res) {
  const param = req.params;

  await User.update({ role_id: null }, {
    where: {
      role_id: param.id
    }
  })

  await RolePermission.destroy({
    where: {
      role_id: param.id
    }
  })

  await Role.destroy({
    where: {
      id: param.id
    }
  }).then(data => {
      res.send({ data: data });
    })
    .catch(err => {
      res.status(500).send({ 
        error: {
          message: err.message || "Some error occurred while retrieving env param."
        }
      });
    });
};