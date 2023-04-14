const hourEL = document.getElementById("hours");
const minuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");

function UpdateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = "AM";
    // console.log(h,m,s);

    if(h>12){
        h -= 12;
        ampm = "PM";
    }

    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    ampmEL.innerText=ampm;

    setTimeout(() => {
        UpdateClock();
    }, 1000);
}

UpdateClock();