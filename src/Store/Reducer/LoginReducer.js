import * as actionTypes from '../Action/action';
const initialState=
{
token:null,
userId:0,
error:0,
loading:0,
logInOrOut:null,
RedirectPath:'/'

}

const reducer=(state=initialState,action)=>{
  
    switch(action.type)
    {
        case actionTypes.LOGIN_START:
            return{
                ...state,
                loading:true
                    }
            case actionTypes.LOGIN_SUCCESSFULL:
                return{
                    ...state,
                    token:action.token,
                        userId:action.userId,
                        loading:false,
                        logInOrOut:true
                }
                case actionTypes.LOGIN_FAIL:
                    return{
                        ...state,
                            loading:false,
                            error:action.error       ,
                        logInOrOut:false
                    }
                    case actionTypes.LOGOUT_USER:
                        return{
                              ...state,
                                token:null,
                                userId:null,
                                loading:false,
                                logInOrOut:false
                                
                        }
                        case actionTypes.SET_REDIRECT_PATH:
                        return{
                              ...state,
                              RedirectPath:action.path
                                
                        }
                default:
                    return{
                        ...state
                    }
    }
}

export default reducer;