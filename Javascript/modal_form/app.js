const modal = document.getElementById('myModal');

const btn = document.getElementById('btn');

const close = document.getElementsByClassName('close')[0];

btn.onclick = () => {
    modal.style.display = 'block';
}

close.onclick = ()=>{
    modal.style.display = 'none';
}


