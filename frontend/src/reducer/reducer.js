import data from '../dummyData'
import { ADD_TODO, REMOVE_TODO, FETCH_TODO_START, FETCH_TODO_SUCCESS, FETCH_TODO_FAIL, UPDATE_TODO } from '../actions/actions'

const initialState = {
    ToDoData: [],
    isLoading: false,
    error: ""
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_TODO_START:
            return {
                ...state, ToDoData: state.ToDoData, error: "", isLoading: true
            }
        case FETCH_TODO_FAIL:
            return {
                ...state, ToDoData: state.ToDoData, error: action.payload, isLoading: false
            }
        case FETCH_TODO_SUCCESS:
            return {
                ...state, ToDoData: action.payload, error: "", isLoading: false
            }
        case ADD_TODO:
            return {
                ...state, ToDoData: [...state.ToDoData, action.payload], isLoading: false
            }
            case UPDATE_TODO:
                let updatedState=[]
                for (let i = 0; i< state.ToDoData.length; i++){
                    if (state.ToDoData[i]._id === action.payload._id){
                        updatedState.push(action.payload)
                    } else{
                        updatedState.push(state.ToDoData[i])
                    }
            }
                return {
                    ...state, ToDoData: updatedState
            }
        case REMOVE_TODO:
            let newState = state.ToDoData.filter(item => item !== action.payload)
            return {
                ...state, ToDoData: newState
            }
        default:
            return state
    }
}