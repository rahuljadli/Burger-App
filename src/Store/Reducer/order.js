import * as actionTypes from '../Action/action';

let initialState={
    orders:[],
    loading:null
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
    case actionTypes.FETCH_ORDER_START:
        return{
            ...state,
            loading:true

        }
        case actionTypes.FETCH_ORDER_SUCCESSFULL:
            return{
                ...state,
                orders:action.orders,
                loading:false
            }
            case actionTypes.FETCH_ORDER_FAIL:
            return{
                ...state,
                loading:false
            }
            default:
              return{
                ...state,
              }
    
}

}
export default reducer;