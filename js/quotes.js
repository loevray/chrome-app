const quotes = [
    {
        quote: "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
        author: "헤로도토스"
    },
    {
        quote: "그 여정이 바로 보상이다.",
        author: "스티브 잡스"
    },
    {
        quote: "여러 가능성을 먼저 타진해보라, 그런 후 모험을 하라.",
        author: "헬무트 폰 몰트케"
    },
    {
        quote: "열정없이 사느니 차라리 죽는게 낫다.",
        author: "커트 코베인"
    },
    {
        quote: "삶의 원동력은 무엇일까? 첫째도 욕망, 둘째도 욕망, 셋째도 욕망이다.",
        author: "스탠리 쿠니츠"
    },
    {
        quote: "주여, 제가 이룬 것보다 항상 더 많이 갈망하게 하소서.",
        author: "미켈란 젤로"
    },
    {
        quote: "불가능해 보이는 것은 불확실한 가능성보다 항상 더 낫다.",
        author: "아리스토텔레스"
    },
    {
        quote: "무릅써라! 그 어떤 위험도 무릅써라! 다른 이들의 말, 그들의 목소리에 더 이상 신경쓰지 마라. 세상에서 가장 어려운 것에 도전하라. 스스로 행동하라. 진실을 대면하라.",
        author: "캐서린 맨스필드"
    },
    {
        quote: "천재성에는 한계가 있을 수 있지만 어리석음에는 이런 장애가 없다.",
        author: "엘버트 허버드"
    },
    {
        quote: "운명은 우연이 아닌, 선택이다. 기다리는 것이 아니라, 성취하는 것이다.",
        author: "윌리엄 제닝스 브라이언"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;