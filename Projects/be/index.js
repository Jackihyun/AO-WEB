const express = require("express");
const dbConnect = require("./config/dbConnect");

//서버
const server = express();

//db연결
dbConnect();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

//apply 
server.use("/apply",require("./routes/applyRoutes"));

//main
server.use("/main",require("./routes/mainRoutes"));


server.listen(3000, ()=>{
    console.log('서버 실행 중');
});