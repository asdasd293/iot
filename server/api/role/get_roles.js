const db = require("../../models");
const Op = db.Sequelize.Op;

const Role = db.roles;
const RolePermission = db.role_permissions;
const Permission = db.permissions;

module.exports = function getRolePermissions(req, res) {
  const query = req.query;

  Role.findAll({
    attributes: ['id', 'name', 'color'],
    include: [
      {
        model: Permission,
        attributes: ['id', 'name'],
        as: 'permissions'
      }
    ]
  }).then(data => {
      const convert = data.map(v => ({
        id: v.id,
        name: v.name,
        color: v.color,
        permissions: v.permissions.map(p => ({
          id: p.id,
          name: p.name
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