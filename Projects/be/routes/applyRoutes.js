const express = require("express");
const router = express.Router();
const {getApply, postApply} = require("../controllers/applyController");

router.route("/")
.get(getApply)
.post(postApply);

module.exports = router;