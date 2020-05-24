const db = require("../../models");

const User = db.users;
const UserArea = db.user_areas;

module.exports = async function create(req, res) {
  const body = req.body;

  if (!body.name || !body.email) {
    return res.status(400).send({
      error: {
        message: 'Parameters not exist.'
      }
    })
  }

  const value = {
    name: body.name,
    role_id: body.role_id,
    phone: body.phone,
    email: body.email,
    address: body.address
  }

  User.create(value)
    .then(async data => {
      if (body.areas.length) {
        const array = body.areas.map(v => ({
          user_id: data.id,
          area_id: v
        }))

        await UserArea.bulkCreate(array)
      }
      
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