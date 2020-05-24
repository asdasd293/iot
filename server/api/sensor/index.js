var router = require("express").Router();

const GetSensors = require("./get_sensors");
const GetSensor = require("./get_sensor");
const PutSensor = require("./put_sensor");
const PostSensor = require("./post_sensor");
const DeleteSensor = require("./delete_sensor");

router.get("/", GetSensors);

router.get("/:id", GetSensor);

router.put("/:id", PutSensor);

router.post("/", PostSensor);

router.delete("/:id", DeleteSensor);

module.exports = router;