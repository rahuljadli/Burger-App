import * as actionTypes from '../Action/action';
const initialState=
{
token:0,
userId:0,
error:0,
loading:0

}

const reducer=(state=initialState,action)=>{
  
    switch(action.type)
    {
        case actionTypes.LOGIN_START:
            return{
                ...state,
                token:"Start",
                loading:true
                    }
            case actionTypes.LOGIN_SUCCESSFULL:
                return{
                    ...state,
                    token:action.token,
                        userId:action.userId,
                        loading:false
                }
                case actionTypes.LOGIN_FAIL:
                    return{
                        ...state,
                            loading:false,
                            error:action.error
                    }
                    case actionTypes.LOGOUT_USER:
                        return{
                            ...state,
                                loading:false,
                                
                        }
                default:
                    return{
                        ...state
                    }
    }
}

export default reducer;