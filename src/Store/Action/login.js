import * as actionTypes from './action';
import axios from 'axios';
export const LoginSuccessful=(idToken,localId)=>{
   
    return{
        type:actionTypes.LOGIN_SUCCESSFULL,
        token:idToken,
        userId:localId
    }
}
export const LoginFail=(error)=>{
    return{
        type:actionTypes.LOGIN_FAIL,
        error:error

    }
}
export const LoginStart=()=>{
    return{
        type:actionTypes.LOGIN_START

    }
}
export const LogOut=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiresIn')
    return{
        type:actionTypes.LOGOUT_USER
    }
}

// For setting the timeout value and call Logout Dispatcher

export const LoginTimeOut=(expirationTimeOut)=>{
  
    
    return dispatch=>{
        setTimeout(()=>{
            dispatch(LogOut())
        },expirationTimeOut*1000)
    }

}



export const LoginUser=(email,password,signInOrUp)=>{
    
    return dispatch=>{
        dispatch(LoginStart());
        
        const userDetail={
            email:email,
            password:password,
            returnSecureToken:true
        };

        let url=""
        if(signInOrUp==='Sign Up')
        {
            url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCd9Kln8XcHgRH_pxhPGn-U7EOwT21HTTA`
        }
        else
        {
            url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCd9Kln8XcHgRH_pxhPGn-U7EOwT21HTTA`
       }
        axios.post(url,userDetail).then(response=>{
           

            // Converting the Expiray Date

            const expiresInDate=new Date(new Date().getTime() + response.data.expiresIn*1000);

            localStorage.setItem('expiresIn',expiresInDate)
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('userId',response.data.localId)

            dispatch(LoginSuccessful(response.data.idToken,response.data.localId))
            dispatch(LoginTimeOut(response.data.expiresIn))
        }
        ).catch(error=>{
            console.log("Error Message",error)
            dispatch(LoginFail(error.response.data.error))

        })

    }
}

export const setRedirectPath=(path)=>{
    return {
        type:actionTypes.SET_REDIRECT_PATH,
        path:path
    }
};
export const logInCheck=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token')
        const userId=localStorage.getItem('userId')
      
        if(!token){
            dispatch(LogOut())
        }
        else{
            const expirayDate=new Date(localStorage.getItem('expiresIn'));
            if(expirayDate>new Date())
            {dispatch(LoginSuccessful(token,userId))
            dispatch( LoginTimeOut( (expirayDate.getTime() - new Date().getTime())*1000 ) );
           }
            else{
                dispatch(LogOut())
            }

        }
    }
}