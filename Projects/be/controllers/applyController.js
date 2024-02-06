const asyncHandler = require("express-async-handler");
const Applyer = require("../models/applyerModel");


const getApply = asyncHandler(async(req, res) => {
    res.send("apply get");
});

const postApply = asyncHandler(async(req,res) => {
    const {id, name, phoneNum, aWord} = req.body;
    console.log(req.body);

    if(!id || !name || !phoneNum || !aWord){
        return res.send("필수 값이 입력되지 않았습니다.")
    }

    const applyer = await Applyer.create({
        id, name, phoneNum, aWord
    });
    res.send("apply post");
})


module.exports = {getApply, postApply};