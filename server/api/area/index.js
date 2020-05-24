var router = require("express").Router();

const GetAreas = require("./get_areas");
const GetArea = require("./get_area");
const PostArea = require("./post_area");
const PutArea = require("./put_area");
const DeleteArea = require("./delete_area");

router.get("/", GetAreas);

router.get("/:id", GetArea);

router.post("/", PostArea);

router.put("/:id", PutArea);

router.delete("/:id", DeleteArea);

module.exports = router;