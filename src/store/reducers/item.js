const initialState = {
    items:[],
}

const itemReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return{
                items:[...state.items,action.payload]
            }
            case "DELETE_ITEM":

            const temp = state.items.filter((item,index)=>{
                return index !==action.id
            })
            return{
                items:[...temp],
            }
            default:
                return state
            
    }

}

export default itemReducer;

