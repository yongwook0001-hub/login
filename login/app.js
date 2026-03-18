
const express = require('express');
const app = express();

//라우팅
const home = require('./routes/home/index'); 

//앱 세팅
app.set('views', './views'); //views 폴더를 템플릿 폴더로 지정
app.set('view engine', 'ejs'); //템플릿 엔진을 ejs로 지정


app.use("/", home); //미들 웨어를 등록해주는 메소드

module.exports = app; // 외부 파일에서 사용할 수 있도록 exports 객체에 app 객체를 담아서 내보냄

package