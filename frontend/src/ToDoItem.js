import { useState } from 'react'
import { connect } from 'react-redux'
import { removeToDo, updateTodo } from './actions/actions'

function ToDoItem(props){
    const [completed, setCompleted] = useState(props.ToDo.completed)
    async function handleUpdate(e){
        e.preventDefault()
        
       await props.updateTodo(props.ToDo._id, {completed: !completed})
        setCompleted(!completed)
    }

    function handleClick(e){
        e.preventDefault()
        props.removeToDo(e.target.id,
            props.ToDo)
    }
    return(
        <>
        <h2>{props.ToDo.title}</h2>
        <p>{props.ToDo.textContent}</p>
        <h6>{props.ToDo.created_at}</h6>
        <h3 onClick={handleUpdate}>{completed? "DONE" : "DO IT"}</h3>
        <button id = {props.ToDo._id} onClick={handleClick}>DELETE</button>
        </>
    )
}

export default connect(null, {removeToDo, updateTodo})(ToDoItem)