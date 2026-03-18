"use strict";

const home = (req, res) => {
    res.render('home/index'); //views 폴더의 home 폴더의 index.ejs 파일을 렌더링
}

const login = (req, res) => {
res.render('home/login'); //views 폴더의 home 폴더의 login.ejs 파일을 렌더링
}

module.exports = {
    home,
    login
};