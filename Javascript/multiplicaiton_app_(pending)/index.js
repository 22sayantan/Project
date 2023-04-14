const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEL = document.getElementById("question");

const inputEl = document.getElementById("input");

const inputEl2 = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEL.innerText = `What is ${num1} multiple by ${num2}?`;

const correctAns = num1 * num2;

console.log('clicked');

formEl.addEventListener("submit", () => {
        const userAns = +inputEl.value
        // console.log(userAns, typeof userAns);
        if(userAns === correctAns){
            score++;
            // console.log(score);
            updateLocalStorage();
        }else{
            score--;
            // console.log(score);
            updateLocalStorage();
        }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


// pending project