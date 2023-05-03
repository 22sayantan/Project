import React, { useState } from "react";

function BMI_form(){
    const [height,setHeihgt] = useState(0);
    const [weight,setWeihgt] = useState(0);
    // const [result,setResult] = useState('');
    
    const reload = () =>{
        window.location.reload;
    };

    return(
        <div className="container">
            hii developer
            <form onSubmit={function(){console.log('hello')}}>
                <label htmlFor="">Height</label><br />
                <input 
                type="text"
                onChange={(ev)=> setHeihgt(ev.target.value)}
                value= {height}
                /> <br />

                <label htmlFor="">Weight</label><br />
                <input 
                type="text"
                onChange={(ev)=> setWeihgt(ev.target.value)}
                value= {weight}
                /> <br />


                <button className="btn" type="submit">Submit</button>
                <button className="btn outline-btn" onClick={reload} type="submit">Reload</button>

                <h2>Result: {height}</h2>
                <br />
                <h2>Result: {weight}</h2>
                <br />
                {/* <h1>{result}</h1> */}

            </form>
        </div>
    );
};

export default BMI_form;