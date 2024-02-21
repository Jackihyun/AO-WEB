const express = require("express");
const router = express.Router();
const postApply = require("../controllers/applyController");



router.route("/")
.post(postApply);

module.exports = router;