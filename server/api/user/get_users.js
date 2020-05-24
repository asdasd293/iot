const db = require("../../models");
const Op = db.Sequelize.Op;

const User = db.users;
const UserArea = db.user_areas;
const Area = db.areas;
const Role = db.roles;

module.exports = async function findAll(req, res) {
  const query = req.query;

  User.findAll({
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
    ],
    where: {
      deleted: false
    }
  }).then(data => {
      const convert = data.map(el => ({
        id: el.id,
        name: el.name,
        phone: el.phone,
        address: el.address,
        role: {
          id: el.role_id,
          name: el.role.name
        },
        areas: el.areas.map(v => ({
          id: v.id,
          name: v.name,
          lat: v.lat,
          long: v.long
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