const ans = document.getElementsByTagName('input');
const btn = document.getElementById('btn');

btn.addEventListener('click',display_ans);

function display_ans(){
        for(let i=0;i<ans.length;i++){
        
            if(ans[i].checked){
                console.log(ans[i].value);
            }
    }
}

display_ans();