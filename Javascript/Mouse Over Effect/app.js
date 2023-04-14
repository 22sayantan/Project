const item = document.getElementsByTagName('li');
const text = document.getElementsByTagName('li')[2].innerText;

item[2].addEventListener('mouseover',changeText);
item[2].addEventListener('mouseout',resetText);

function changeText(){
    item[2].innerText = 'Text Changed! ';
}

function resetText(){
    item[2].innerText = text;
}