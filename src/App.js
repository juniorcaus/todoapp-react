import './App.css';


function App() {

  function handleAddTodo(event) {
    console.log('click');
  }

  function handleChangeName(event) {
    console.log(event.target.value);
  }


  return (
    <div className="container">
      <div className="controls" >

        <input type="text" onChange={handleChangeName} />

        <button onClick={handleAddTodo} >Add Todo</button>
        <button>Limpar completas</button>

      </div>

      <div className="todo-list-container"> 
        Conteudo das tarefas
      
      </div>
   
    </div>
  );
}

export default App;
