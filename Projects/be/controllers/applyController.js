const asyncHandler = require("express-async-handler");
const Applyer = require("../models/applyerModel"); //지원자 모델

// /apply에 post요청
const postApply = asyncHandler(async(req,res) => {
    try{//바디에서 정보 받기
    const {id, name, phoneNum, aWord} = req.body;
    console.log(req.body);

    //필수 입력 안되면 400
    if(!id || !name || !phoneNum || !aWord){
        return res.status(400).send("필수 값이 입력되지 않았습니다.");
    }

    // 학번중복 401
    // 이부분은 잘못입력해서 다시 지원할때 예외 처리 해야할듯
    const existingApplyer = await Applyer.findOne({ id });
    if (existingApplyer) {
        return res.status(401).send("이미 지원하셨습니다.");
    }

    //학번 8자리 아니면 402
    if(id.length !== 8){
        return res.status(402).send("유효하지 않은 학번입니다.");
    }

    //db에 저장
    const applyer = await Applyer.create({
        id, name, phoneNum, aWord
    });

    //성공시 201
    res.status(201).send("지원이 완료되었습니다.");}
    catch(err){
        console.log(err);
        res.status(500).send("서버 오류");
    }
})


module.exports = postApply;