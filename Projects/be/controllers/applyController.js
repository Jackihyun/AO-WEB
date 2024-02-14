const asyncHandler = require("express-async-handler");
const Applyer = require("../models/applyerModel"); //지원자 모델

// /apply에 get요청 페이지연결
const getApply = asyncHandler(async(req, res) => {
    res.send("apply get");
});

// /apply에 post요청
const postApply = asyncHandler(async(req,res) => {
    //바디에서 정보 받기
    const {id, name, phoneNum, aWord} = req.body;
    console.log(req.body);

    //못받은 경우 
    if(!id || !name || !phoneNum || !aWord){
        return res.send("필수 값이 입력되지 않았습니다.")
    }

    //db에 저장
    const applyer = await Applyer.create({
        id, name, phoneNum, aWord
    });
    res.send("apply post");
})


module.exports = {getApply, postApply};