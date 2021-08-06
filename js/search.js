const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const searchEngine = document.querySelector("#search-engine");
const searchIcon = document.getElementById("searchIcon");
const searchMenu = document.getElementById("searchMenu");

let site = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=";


//버튼으로 드롭다운 메뉴 토글
function SrchBtnTog () {
    searchEngine.classList.toggle("hidden");
}

searchBtn.addEventListener("click", SrchBtnTog);

//드롭메뉴에서 아이콘 누르면 검색엔진 변경
function siteClickHandle(event) {
    if(event.target.id === "naver"){
    site = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=";
    searchBtn.innerText = "N";
} else if(event.target.id === "google"){
    site = "https://www.google.co.kr/search?q=";
    searchBtn.innerText = "G";
} else if(event.target.id === "youtube"){
    site = "https://www.youtube.com/results?search_query=";
    searchBtn.innerText = "Y";
} else {}
}

searchEngine.addEventListener("mousedown", siteClickHandle);

//버튼 떼지면 드롭메뉴 숨김
function SrchBtnBlur () {
    searchEngine.classList.add("hidden");
}

searchBtn.addEventListener("blur", SrchBtnBlur)

//사이트 출력
function siteChanger (event) {
    event.preventDefault();
    window.open(`${site}${searchInput.value}`);
}

searchForm.addEventListener("submit", siteChanger);

//마우스 올라가면 보임

function showSearchEngine() {
    searchForm.classList.toggle("hidden");
    searchMenu.classList.toggle("hidden");
}

searchIcon.addEventListener("click", showSearchEngine)