import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {

  const [todoList, setTodoList ] = useState([]);

  const [name, setName] =useState('')


  function handleAddTodo(event) {
    
    const copyTodoList = [...todoList];
    copyTodoList.push(name);
    setTodoList(copyTodoList);

    console.log(todoList);
    setName('')
  }

  function handleChangeName(event) {
   setName(event.target.value);
  }


  return (
    <div className="container">
      <div className="controls" >

        <input value={name} type="text" onChange={handleChangeName} />

        <button onClick={handleAddTodo} >Add Todo</button>
        <button>Limpar completas</button>

      </div>

      <div className="todo-list-container"> 
  
        <TodoList todoList={todoList} />

      </div>
   
    </div>
  );
}

export default App;
