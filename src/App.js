import React,{useState} from "react"
import TodoList from "./TodoList";
import './App.css';

const App=()=> {
  const [task,setTask] = useState("");
  const [todos,setTodos]=useState([]);
  const changeHandler = e=>{
    setTask(e.target.value)
    
  }
  const submitHandler = e=>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue)=>{
    const newTodos = todos.filter((todo,index)=>index !==indexValue);
    setTodos(newTodos);
  }
  return (
    <center>
    <div className="todo-card">
      <center>
       <div className="card">
        <div className="card-body">
        <h2 className="card-title">Todo Management Application</h2>
        <form onSubmit={submitHandler}>
          <div >
          <input className="todo-name" type="text" name="task" value={task} onChange={changeHandler}/> &nbsp; &nbsp;
          <input className="Add" type="submit" value="Add" name="Add"/>
          </div>
        </form>
        <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        </div>
       </div>
      </center>
    </div>
    </center>
  );
}
export default App;
