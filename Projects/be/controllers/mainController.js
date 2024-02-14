const asyncHandler = require("express-async-handler");

//메인페이지 get
const getMain = asyncHandler(async(req, res) => {
    res.send("main get");
});

module.exports = getMain;