const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#todo-form")
const greeting = document.querySelector("#greeting");
const nameBtn = document.querySelector("#greeting-btn")
const welcome = document.getElementById("welcome");
const nameEditMenu = document.getElementById("nameEditUl");
const nameEdit = document.getElementById("nameEdit");
const welcomeWord = document.getElementById("welcomeWord");
const welcomeUser = document.getElementById("welcomeUser");
const newForm = document.getElementById("newForm");
const newInput = document.getElementById("newInput");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const INVISIBLE = "invisible"

let nameBtnFocus = false;
let nameMouseIn = false;

// 로그인폼에 값(닉네임) 입력시 발생
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// 유저값(닉네임) 받아서 welcome + 닉네임 출력
function paintGreetings(f_username){
    welcomeUser.innerText = `${f_username}`;
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

//닉네임 수정 쩜쩜쩜버튼 토글
function showEditBtn() {
    nameMouseIn = true;
    nameBtn.classList.remove("hidden");
}

function hideEditBtn() {
    nameMouseIn = false;
    if(nameBtnFocus === false) {
        nameBtn.classList.add("hidden");
    }
}

welcome.addEventListener("mouseover", showEditBtn);
welcome.addEventListener("mouseleave", hideEditBtn);

//닉네임 수정 메뉴 토글
function showNameMenu() {
    nameBtnFocus = true;
    nameEditMenu.classList.remove("hidden");
}

function hideNameMenu() {
    nameBtnFocus = false;
    nameEditMenu.classList.add("hidden");
    if(nameMouseIn === false){
    nameBtn.classList.add("hidden");
    }
}

nameBtn.addEventListener("focus", showNameMenu);
nameBtn.addEventListener("blur", hideNameMenu);

//닉네임 수정버튼 클릭. input에 로컬스토리지 꽂아넣음.
function userNameEdit() {
    newInput.value = localStorage.getItem(USERNAME_KEY);
    welcomeUser.classList.add("hidden");
    newForm.classList.remove("hidden");
    nameEditMenu.classList.add("hidden");
}

nameEdit.addEventListener("mousedown", userNameEdit);

//실제 닉네임 수정. 로컬스토리지 갱신 및 출력 이름에 text 넣기.
function nameChange(event) {
    event.preventDefault();
    const username = newInput.value;
    localStorage.removeItem("username");
    localStorage.setItem(USERNAME_KEY, username);
    welcomeUser.innerText = username;
    newForm.classList.add("hidden");
    welcomeUser.classList.remove("hidden");
}

newForm.addEventListener("submit", nameChange);