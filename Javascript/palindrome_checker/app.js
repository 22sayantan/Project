const input_value = document.getElementById('input');
const btn = document.getElementById('submit_btn');


btn.addEventListener('click',myfunction);

function myfunction(){
    const data = input_value.value;
    function reverse_string(str){
        return str.split('').reverse().join('');
    };
    let reverse = reverse_string(data);

    if(data == reverse){
        console.log('Palindrome');
    }else{
        console.log('Not palindrome');
    }
}