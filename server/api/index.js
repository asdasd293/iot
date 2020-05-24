var router = require("express").Router();

const EnvParam = require("./env_param");
const Pi = require("./pi")
const Sensor = require("./sensor")
const Area = require("./area")
const User = require("./user")
const Role = require("./role")

router.use("/api/env_params", EnvParam);

router.use("/api/pis", Pi);

router.use("/api/sensors", Sensor);

router.use("/api/areas", Area);

router.use("/api/users", User);

router.use("/api/roles", Role);

module.exports = router;