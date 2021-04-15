import * as actionTypes from './action';
import axios from 'axios';
export const LoginSuccessful=(data)=>{
   
    return{
        type:actionTypes.LOGIN_SUCCESSFULL,
        token:data.idToken,
        userId:data.localId
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
export const LoginUser=(email,password,signInOrUp)=>{
    
    return dispatch=>{
        dispatch(LoginStart());
        
        const userDetail={
            email:email,
            password:password,
            returnSecureToken:true
        };

        console.log(userDetail)
        let url=""
        if(signInOrUp==='Sign Up')
        {
            console.log("Hiii inside Singup")
            url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCd9Kln8XcHgRH_pxhPGn-U7EOwT21HTTA`
        }
        else
        {
            console.log("Hiii inside SignIn")
            url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCd9Kln8XcHgRH_pxhPGn-U7EOwT21HTTA`
       }
       console.log("About to call axios and URL",url)
        axios.post(url,userDetail).then(response=>{
            console.log("RESPONSE",response.data)
            dispatch(LoginSuccessful(response.data))
        }
        ).catch(error=>{
            console.log("Error Message",error)
            dispatch(LoginFail(error))

        })

    }
}