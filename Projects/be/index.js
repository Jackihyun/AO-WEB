const express = require("express");
const path = require('path');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");

//서버
const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '..','fe','dist')));

//db연결
dbConnect();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "fe", "dist", "index.html"));
});

//apply 
server.use("/applyPage",require("./routes/applyRoutes"));


server.listen(3000, ()=>{
    console.log('서버 실행 중');
});