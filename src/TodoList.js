import React from "react"
const TodoList = ({todolist,deleteHandler}) =>{
    return(
        <div className="todo-data">
            {todolist.map((todo,index) =>
            <div key={index}>
                <h3>{todo} &nbsp; <button className="button-style" onClick={() => deleteHandler(index)}>Delete</button></h3>
            </div>)}
        </div>
    )
}
export default TodoList