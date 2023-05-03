const inputVal = document.getElementById("input_data");
const addBtn = document.getElementById("add");
const list_of_item = document.getElementById("item_list");

addBtn.addEventListener('click',addClick);

function addClick(){
    if(inputVal.value === '')
    {
        alert('enter a input value');
    }
    else
    {
        // console.log(inputVal.value);
        const list = document.createElement("li");
        list.innerHTML = inputVal.value;
        list_of_item.appendChild(list);

        const span = document.createElement('span');
        span.innerHTML='X';
        list.appendChild(span);
    }
    inputVal.value = '';
    saveData();
}

list_of_item.addEventListener('click',(event) => {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveData();
    }else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list_of_item.innerHTML);
}

function showTask(){
    list_of_item.innerHTML = localStorage.getItem('data');
}

showTask();