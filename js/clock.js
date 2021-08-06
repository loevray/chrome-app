const clock24 = document.getElementById("clock24");
const clock12 = document.getElementById("clock12");
const clockBtn = document.getElementById("clockBtn");
const clockSwitch = document.getElementById("changeClock");
const clockSpace = document.getElementById("clockSpace");
const clockMenu = document.getElementById("clockMenu");



//시계함수

//24시간
function getClock24() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock24.innerText = `${hours}:${minutes}`;
}

//12시간 버전
//if else문 생각해봤지만, 이렇게 쓰는게 훨씬 가독성 좋은듯
function getClock12() { 
    const date = new Date();
    const hours = String((date.getHours() + 24) % 12 || 12).padStart(2, "0"); 
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock12.innerText = `${hours}:${minutes}`;
}

//시계함수 호출 + 1초마다 재호출
getClock12();
getClock24();
setInterval(getClock12, 1000);
setInterval(getClock24, 1000);

//시계 24,12시간 버전으로 바꾸기.
function clockChange() {
    clock24.classList.toggle("hidden");
    clock12.classList.toggle("hidden");
}

clockSwitch.addEventListener("click", clockChange);

//쩜쩜쩜 보였다 안보이기.
function showClockBtn() {
    clockBtn.classList.remove("hidden");
}

function hideClockBtn() {
    clockBtn.classList.add("hidden");
}

clockSpace.addEventListener("mouseenter", showClockBtn);
clockSpace.addEventListener("mouseleave", hideClockBtn);

function showClockMenu() {
    clockMenu.classList.toggle("hidden");
}

clockBtn.addEventListener("click", showClockMenu);