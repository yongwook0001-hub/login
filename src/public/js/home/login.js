"use strict";
//로그인 기능 구현하기
//아이디와 비밀번호를 입력받아 로그인 버튼을 누르면 로그인 기능이 구현되도록 하는 것

//1. 로그인 버튼을 누르면 아이디와 비밀번호를 입력받아 서버로 전송하는 기능 구현하기
//2. 서버에서는 아이디와 비밀번호를 받아서 로그인 기능을 구현하는 것
//3. 로그인 기능이 구현되면 로그인 성공 메시지를 띄우는 것

const id = document.querySelector("#id");
const password = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: password.value,
    };
    
    //프런트에서 서버로 전달하기
    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
}
