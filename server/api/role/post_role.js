const db = require("../../models");

const Role = db.roles;
const RolePermission = db.role_permissions;

module.exports = function create(req, res) {
  const body = req.body;

  if (!body.permissions.length || !body.name) {
    return res.status(400).send({
      error: {
        message: 'Parameters not exist.'
      }
    })
  }

  const value = {
    name: body.name,
    color: body.color
  }

  Role.create(value)
    .then(async data => {
      const array = body.permissions.map(v => ({
        role_id: data.id,
        permission_id: v
      }))

      await RolePermission.bulkCreate(array)

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