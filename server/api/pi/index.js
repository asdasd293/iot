var router = require("express").Router();

const GetPis = require("./get_pis");
const GetPi = require("./get_pi")

router.get("/", GetPis);

router.get("/:id", GetPi);

module.exports = router;