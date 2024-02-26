import asyncHandler from "express-async-handler";
import Applyer from "../models/applyerModel.js"; // 지원자 모델

// /apply에 post 요청
const postApply = asyncHandler(async (req, res) => {
    try {
        // 바디에서 정보 받기
        const { id, name, phoneNum, aWord } = req.body;
        console.log(req.body);

        // 필수 입력이 되지 않은 경우 400 반환
        if (!id || !name || !phoneNum || !aWord) {
            return res.status(400).json({ 
                message: "필수입력사항을 전부 적어주세요."
            });
        }

        // 중복지원 401
        const existingApplyer = await Applyer.findOne({ $or: [{ id }, { phoneNum }] });
        if (existingApplyer) {
             return res.status(400).json({ 
                message: "중복지원 하셨습니다."
            });
        }

        // 학번이 8자리가 아닌 경우 402
        if (id.length !== 8) {
            return res.status(400).json({ 
                message: "학번을 확인해 주세요."
            });
        }

        // DB에 저장
        const applyer = await Applyer.create({
            id, name, phoneNum, aWord
        });

        // 성공시 201 반환
        res.status(201).json({ 
            message: "지원이 완료되었습니다."
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "서버 오류입니다."
        });
    }
});

export default postApply;
