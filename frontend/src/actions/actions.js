import axios from 'axios'

export const FETCH_TODO_START = "FETCH_TODO_START"
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS"
export const FETCH_TODO_FAIL = "FETCH_TODO_FAIL"
export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

export const fetchTodo = () => (dispatch) => {
  dispatch({type: FETCH_TODO_START})

  axios
  .get("http://localhost:4040/todo/")
  .then(data => {
    dispatch({type: FETCH_TODO_SUCCESS, payload: data.data.todo_list})
  })
  .catch(err => {
    dispatch({type: FETCH_TODO_FAIL, payload: err.message})
  })
}

export const addToDo = (todo) => (dispatch) =>{
    dispatch({type: FETCH_TODO_START})
    axios
    .post("http://localhost:4040/todo/", todo)
    .then(data => dispatch({type: ADD_TODO, payload: data.data.todo_item}))
    .catch(err => dispatch({type: FETCH_TODO_FAIL, payload: err.message}))
    
  }

  export const updateTodo = (id, update) => (dispatch) =>{
    dispatch({type: FETCH_TODO_START})
    axios
    .put(`http://localhost:4040/todo/${id}`, update)
    .then(data => console.log(data.data.todo_item))
    .catch(err => dispatch({type: FETCH_TODO_FAIL, payload: err.message})
    )
  }

  export const removeToDo = (id, todo) => (dispatch) => {
    dispatch({type: FETCH_TODO_START})
      axios
      .delete(`http://localhost:4040/todo/${id}`)
      .then(data => dispatch({type: REMOVE_TODO, payload: todo}))
      .catch(err => dispatch({type: FETCH_TODO_FAIL, payload: err.message}))
  
    }
  
  
