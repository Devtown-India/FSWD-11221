export const todosReducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.payload]
        case "DELETE_TODO":
            return state.filter(todo=>todo!==action.payload)
        default:
            return state
    }
}