const express = require("express");
const router = express.Router();
const getMain = require("../controllers/mainController");


router.route("/")
.get(getMain);

module.exports = router;