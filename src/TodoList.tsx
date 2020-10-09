import React, {useState} from "react";

const TodoList = () => {

    const initialState = [
        {
            task: 'A',
            isCompleted: false
        },
        {
            task: 'B',
            isCompleted: false
        },
        {
            task: 'C',
            isCompleted: false
        },
    ];

    const [todos, setTodo] = useState(initialState);

    return (
        <>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.task}</li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
