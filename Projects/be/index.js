const express = require("express");
const dbConnect = require("./config/dbConnect");

//서버
const server = express();

//ejs세팅(머지해야함)
server.set("view engine", "ejs");
server.set("views", "../fe/views");

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