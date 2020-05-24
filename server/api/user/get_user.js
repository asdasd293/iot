const db = require("../../models");

const User = db.users;
const UserArea = db.user_areas;
const Area = db.areas;
const Role = db.roles;

module.exports = async function findOne(req, res) {
  const param = req.params;

  User.findByPk(param.id, {
    include: [
      {
        model: Area,
        attributes: ['id', 'name', 'lat', 'long'],
        as: 'areas'
      },
      {
        model: Role,
        attributes: ['name'],
        as: 'role'
      }
    ]
  }).then(data => {
      const convert = {
        id: data.id,
        name: data.name,
        phone: data.phone,
        address: data.address,
        role: {
          id: data.role_id,
          name: data.role.name
        },
        areas: data.areas.map(v => ({
          id: v.id,
          name: v.name,
          lat: v.lat,
          long: v.long
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