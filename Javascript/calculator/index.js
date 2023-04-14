const currentInput = document.querySelector(".currentInput");
const answerScreen = document.querySelector(".answerScreen");
const buttons = document.querySelector("button");
const evaluate = document.querySelector("#evaluate");
// const  = document.querySelector("button");









//calculator Display
let realTimeScreenValue = []

//To Clear
clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150,150,150,0.87)";
})

//get value of any button clicked and display to the screen
buttons.forEach((btn) => {

    btn.addEventListener("click", ()=> {
        //when clicked button is not erased button
        if(!btn.id.match('erase')) {
            //To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            //to evaluate answer in real time 
            if(btn.classList.contains('num_btn')){
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }
        }

        // When erase button is clicked 
        // code here:

        //when clicked button is evaluate button

        if(btn.id.match('evaluate')){
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        //to prevent undefined error in screen
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0;
        }
    })
})