import React, { useState } from 'react';



const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo =(todo) =>{
        if(!todo.text) return;
        setTodos([todo, ...todos]);
    };

    const removeTodo =(id)=> {
        const removeArray = todos.filter((todo) => todo.id !== id);
        setTodos(removeArray);
    };

    return(
        <section className="main-container">
            <h1 className="todolist-header">TODO List</h1>
            <TodoForm onSubmit={addTodo}/>
            <TodoList 
                    todos={todos}
                    completeTodo ={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    />
        </section>
    )
}