const express = require('express');

const app = express();



//라우팅

const home = require('./src/routes/home/index');



//앱 세팅

app.set('views', './src/views'); //views 폴더를 템플릿 폴더로 지정

app.set('view engine', 'ejs'); //템플릿 엔진을 ejs로 지정

app.use(express.static(`${__dirname}/src/public`)); //정적 파일을 제공하는 미들웨어, src/public 폴더를 정적 파일이 있는 폴더로 지정



app.use("/", home); //미들 웨어를 등록해주는 메소드



module.exports = app; // 외부 파일에서 사용할 수 있도록 exports 객체에 app 객체를 담아서 내보냄


