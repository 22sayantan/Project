const submit = document.getElementById('submit');
const full_name = document.getElementById('name');

submit.addEventListener('click',test_Func);

function test_Func(){
    var value = full_name.value;
    console.log(value);
}