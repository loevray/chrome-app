const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#todo-form")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// 로그인폼에 값(닉네임) 입력시 발생

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// 유저값(닉네임) 받아서 welcome + 닉네임 출력

function paintGreetings(f_username){
    greeting.innerText = `Welcome ${f_username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬 스토리지 값이 null이면 로그인폼 출력, 제출 이벤트 따오기

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}