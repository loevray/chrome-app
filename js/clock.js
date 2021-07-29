const clock = document.querySelector("h2#clock");

//시계함수
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

//시계함수 호출 + 1초마다 재호출
getClock();
setInterval(getClock, 1000);