import {useState} from 'react'
import { connect } from 'react-redux'
import { addToDo } from './actions/actions'

function ToDoForm(props){
    const [initialForm] = useState({
        title: "",
        textContent: "",
        created_at:"",
        completed: false
    })

    //universal form handler
    const [form, setForm] = useState(initialForm)

    //universal change handler
    function handleChange(e){
        console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addToDo(form)
        setForm(initialForm)

    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label for="title">Name of Task: </label>
            <input type="text" name="title" onChange={handleChange}/>
            <label for="textContent">Description:</label>
            <input type="text" name="textContent" onChange={handleChange}/>
            <label for="created_at">Date Created:</label>
            <input type="date" name="created_at" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </div>
    )
}
export default connect(null, {addToDo})(ToDoForm)