"use strict";
const users = {
    id: ["woorim", "test", "admin"],
    psword: ["1234", "5678","0000"],
};

const output = {
home : (req, res) => {
    res.render('home/index'); //views 폴더의 home 폴더의 index.ejs 파일을 렌더링
},

login : (req, res) => {
res.render('home/login'); //views 폴더의 home 폴더의 login.ejs 파일을 렌더링
},
};

const process = {
    login: (req, res) => {
       const id = req.body.id;
       const psword = req.body.psword;
       console.log(id, psword);// 로그인 데이터를 받아서 처리하는 함수, 현재는 로그인 데이터를 콘솔에 출력하는 기능만 구현되어 있음
    },
};

module.exports = {
   output,
   process,
};
