var router = require("express").Router();

const GetRoles = require("./get_roles");
const GetRole = require("./get_role");
const PostRole = require("./post_role");
const PutRoles = require("./put_role");
const DeleteRole = require("./delete_role");

router.get("/", GetRoles);

router.get("/:id", GetRole);

router.post("/", PostRole);

router.put("/:id", PutRoles);

router.delete("/:id", DeleteRole);

module.exports = router;