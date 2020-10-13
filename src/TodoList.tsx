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

  const [task, setTask] = useState('');

  const intialCompletedState: Array<any> = [];

  const [completed, setCompleted] = useState(intialCompletedState);

  const handleNewTask = (event: any) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (task === '') {
      return;
    }
    setTodo(todos => [...todos, {task: task, isCompleted: false}]);
    setTask('');
  };

  const handleRemoveTask = (index: any) => {
    const newTodos = todos.filter((todo) => {
      return todo !== todos[index];
    });
    setTodo(newTodos);

    completed.unshift(todos[index]);
    setCompleted(completed);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        Add Task : <input value={task} placeholder={"タスク追加するとこ"} onChange={handleNewTask}/>
      </form>
      <p>終わってない</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}> {todo.task} <span onClick={() => handleRemoveTask(index)}>[終わったw😂]</span></li>
        ))}
      </ul>

      <br/>

      <p>終わったよ</p>
      <ul>
        {completed.map((xxx, index) => (
          <li key={index}> {xxx.task} </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
