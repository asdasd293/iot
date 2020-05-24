const db = require("../../models");

const User = db.users;
const UserArea = db.user_areas;

module.exports = async function update(req, res) {
  const param = req.params;
  const body = req.body;

  if (!body.name || !body.email) {
    return res.status(400).send({
      error: {
        message: 'Parameters not exist.'
      }
    })
  }

  if (body.areas.length) {
    await UserArea.destroy({
      where: {
        user_id: param.id
      }
    })

    const array = body.areas.map(v => ({
      user_id: param.id,
      area_id: v
    }))

    await UserArea.bulkCreate(array)
  }

  const value = {
    name: body.name,
    role_id: body.role_id,
    phone: body.phone,
    email: body.email,
    address: body.address
  }

  User.update(value, {
    where: {
      id: param.id
    }
  })
    .then(async data => {
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