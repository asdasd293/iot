const db = require("../../models");

const Role = db.roles;
const RolePermission = db.role_permissions;
const Permission = db.permissions;

module.exports = function findOne(req, res) {
  const param = req.params;

  Role.findByPk(param.id, {
    attributes: ['id', 'name', 'color'],
    include: [
      {
        model: Permission,
        attributes: ['id', 'name'],
        as: 'permissions'
      }
    ]
  }).then(data => {
    const convert = {
      id: data.id,
      name: data.name,
      color: data.color,
      permissions: data.permissions.map(p => ({
        id: p.id,
        name: p.name
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