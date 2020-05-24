var router = require("express").Router();

const GetUsers = require("./get_users");
const GetUser = require("./get_user");
// const GetUserAreas = require("./get_user_areas");
const PostUser = require("./post_user");
const PutUser = require("./put_user");
const DeleteUser = require("./delete_user");

router.get("/", GetUsers);

router.get("/:id", GetUser);

// router.get("/:id/areas", GetUserAreas);

router.post("/", PostUser);

router.put("/:id", PutUser);

router.delete("/:id", DeleteUser);

module.exports = router;