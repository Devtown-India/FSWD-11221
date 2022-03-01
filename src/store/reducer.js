

/*
    action = {
        type: String,
        payload: Object
    }
*/


const todosReducer = (state,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return {...state,todos:[...state.todos,action.payload]}
        case "REMOVE_TODO":
            return {...state,todos:[...state.todos,action.payload]}
        default:
            console.log('default case')
            return state
    }
}

export default todosReducer