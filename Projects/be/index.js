const express = require("express");
const dbConnect = require("./config/dbConnect");
const server = express();
dbConnect();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use("/apply",require("./routes/applyRoutes"));


server.listen(3000, ()=>{
    console.log('서버 실행 중');
});