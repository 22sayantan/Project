import React, { useState } from 'react'

function Edit(){

    const[myVal,setmyVal] = useState('');

    const changeVal = (ev) =>{
        setmyVal(ev.target.value);
    }

    const myClick = (e) => {
        e.preventDefault();

        console.log(myVal);
    };

    return(
        <>
        <form>
          <input type="text" placeholder='enter your tasks' onChange={changeVal} value={myVal}/>
          <button type='submit' onClick={myClick}>+</button>
        </form>
         
        </>
    );
}

export default Edit;