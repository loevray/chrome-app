const clock24 = document.getElementById("clock24");
const clock12 = document.getElementById("clock12");
const clockBtn = document.getElementById("clockBtn");
const clockSwitch = document.getElementById("changeClock");
const clockSpace = document.getElementById("clockSpace");
const clockMenu = document.getElementById("clockMenu");
const switch1 = document.getElementById("switch1");

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

//li(24hours-clock)눌러도 스위치 박스 작동되게.
function switchOnOff() {
    if(!switch1.checked) {
        switch1.checked = true;
        localStorage.setItem("clockFigure", switch1.checked)
        clockChange();
    } else if (switch1.checked)
    {
        switch1.checked = false;
        localStorage.setItem("clockFigure", switch1.checked)
        clockChange();
    }
}

clockSwitch.addEventListener("click", switchOnOff);

//로컬 스토리지 체크.
//차라리 그때그때 생성해서 넣는게 자원관리면에서 효율이 좋아보임. 개선예정
if(JSON.parse(localStorage.getItem("clockFigure"))) {
    switch1.checked = true;
    clock24.classList.remove("hidden");
    clock12.classList.add("hidden");
    } else if(!JSON.parse(localStorage.getItem("clockFigure"))) {
    switch1.checked = false;
    clock24.classList.add("hidden");
    clock12.classList.remove("hidden");
    } else if(localStorage.getItem("clockFigure") === null) {
    clock24.classList.add("hidden");
    clock12.classList.remove("hidden");
    };

// on/off 누르면 시계 12시간,24시간으로 바뀜.
function clockChange() {
    clock24.classList.toggle("hidden");
    clock12.classList.toggle("hidden");
}

switch1.addEventListener("click", clockChange);

//시계 버튼 시작.------------------------------------

//btnfocus로 줄임표 버튼 focus유무 확인. 
//mousein으로 clock부분div 유무 확인. 
//changeBtnFoucs로 on/off 버튼 focus유무확인
let btnFocus = false;
let mouseIn = false;
let changeBtnFocus = false;

//줄임표 버튼 보여주기
//마우스가 clock쪽 div에 들어오면 mousein값 true. 
function showClockBtn() {
    mouseIn = true;
    clockBtn.classList.remove("hidden");
}

//줄임표 버튼 사라지기.
//마우스가 나가면 mouseIn값 false.
//줄임표 버튼과 on/off버튼의 focus가 동시에 해제되야만 줄임표 버튼을 지움.

function hideClockBtn() {
    mouseIn = false;
    if(btnFocus === false && changeBtnFocus === false) {
    clockBtn.classList.add("hidden");
    clockMenu.classList.add("hidden");
}
}

clockSpace.addEventListener("mouseenter", showClockBtn);
clockSpace.addEventListener("mouseleave", hideClockBtn);


//축약용 함수.
//각각 on/off버튼의 focus를 true와 false로 리턴함.
function changeBtnFoucsTrue() {
    changeBtnFocus = true;
}

function changeBtnFocusFalse() {
    changeBtnFocus = false;
}

// on/off버튼 blur시, on/off버튼 사라지기.
// blur면 당연히 on/off의 focus는 false.
// 추가로 mouseIn의 값 false시 줄임표 버튼 제거함.
// on/off버튼 focus후 blur처리하면 줄임표 버튼이 남아있기 때문이다.
function hideChangeBtn() {
    changeBtnFocusFalse();
    clockMenu.classList.add("hidden");
    if(mouseIn === false) {
        clockBtn.classList.add("hidden");
    }
}

//줄임표 버튼 누를시 on/off메뉴 토글.
//이것도 넣지 않으면 토글로 on/off메뉴 show&hide 불가함.
//누를때마다 줄임표 버튼의 focus는 당연하게도 true. on/off버튼의 포커스도 역시 false다.
function showClockMenu() {
    btnFocus = true;
    changeBtnFocusFalse();
    clockMenu.classList.toggle("hidden");
}

//줄임표 버튼 blur시 동작되는 것.
//먼저 줄임표 버튼의 focus값을 false.
//이후 두가지 if문 검사.
//첫번째는 on/off버튼의 focus를 검사해서 false면 숨긴다. 두번째는 줄임표 버튼의 focus를 검사해서 false 숨긴다.
//줄임표 버튼은 당연히 false니까 무조건 숨겨짐.

function hideClockMenu() {
    btnFocus = false;
    if(changeBtnFocus === false) {
    clockMenu.classList.add("hidden");
    }
    if(mouseIn === false) {
    clockBtn.classList.add("hidden");
    };
}


//mousedown이 아닌 mouseenter나 focus를 넣으면 hideclockmenu가 먼저 작동하기에 원하지 않는 그림이 됨.
clockSwitch.addEventListener("mousedown", changeBtnFoucsTrue);
clockSwitch.addEventListener("focus", changeBtnFoucsTrue);
clockSwitch.addEventListener("blur", hideChangeBtn);
clockBtn.addEventListener("mousedown", showClockMenu);
clockBtn.addEventListener("blur", hideClockMenu);