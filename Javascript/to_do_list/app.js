const Input_data = document.getElementById('input_data');
const add = document.getElementById('add');
const reset = document.getElementById('reset');
const done = document.getElementById('done');
const delet = document.getElementById('delete');
const description = document.getElementById('description');
const my_list = document.getElementById('my_list');


add.addEventListener('click',add_item);
reset.addEventListener('click',myfucntion2);
done.addEventListener('click',complete);
delet.addEventListener('click',remove);

function add_item(){
    const data = Input_data.value;
    description.innerHTML = data;
    my_list.style.display = 'block';
    console.log(data);
}

function myfucntion2(){
    console.log('clicked');
}

function complete(){
    console.log('complete');
    description.style.textDecoration = 'line-through';
    description.style.textDecorationColor = 'red';
}

function remove(){
    console.log('remove');
    my_list.style.display = 'none';
}
