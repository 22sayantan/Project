import React, { useState } from 'react'


const TodoForm =(props) =>{
    const [input, setInput] = useState(props.edit ? props.edit.value : "");
    const inputRef = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const dt = props.edit ? props.edit.id : new Date().getTime();
        
        props.onSubmit({
            id: dt,
            text: input,
        });
        setInput("")
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-input-form">
                {props.edit ? (
                    <>
                    <input
                        placeholder='Update todo'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input-edit'
                        maxLength={300}
                        autoComplete='off'
                    />
                    </>
                ):(
                    <>
                        <MdOutlineEditNote size={35} />
                        <input 
                            placeholder='Add a todo'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='todo-input'
                            ref={inputRef}
                            maxLength={300}
                            autoComplete='off'
                        />
                    </>
                )}
            </div>
        </form>
    );
};

export default TodoForm;