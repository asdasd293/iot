var router = require("express").Router();

const GetEnvParams = require("./get_env_params");
const GetEnvParam = require("./get_env_param")

router.get("/", GetEnvParams);

router.get("/:id", GetEnvParam);

module.exports = router;