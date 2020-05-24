const db = require("../../models");

const Role = db.roles;
const RolePermission = db.role_permissions;

module.exports = async function update(req, res) {
  const body = req.body;
  const param = req.params;

  if (!body.permissions.length || !body.name) {
    return res.status(400).send({
      error: {
        message: 'Parameters not exist.'
      }
    })
  }

  await RolePermission.destroy({
    where: {
      role_id: param.id
    }
  })

  const array = body.permissions.map(v => ({
    role_id: param.id,
    permission_id: v
  }))

  await RolePermission.bulkCreate(array)

  const value = {
    name: body.name,
    color: body.color
  }

  Role.update(value, {
    where: {
      id: param.id
    }
  })
    .then(data => {
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