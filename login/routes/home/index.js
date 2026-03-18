"use strict";
//메인 app.js에서 라우터 분리
const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home); //라우터 설정, '/' 경로로 GET 요청이 들어오면 home 함수를 실행

router.get('/login', ctrl.login);

module.exports = router; // 외부 파일에서 사용할 수 있도록 exports 객체에 router 객체를 담아서 내보냄