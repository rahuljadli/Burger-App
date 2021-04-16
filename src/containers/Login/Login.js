import {Component} from 'react';
import classes from './Login.module.css';
import {connect} from 'react-redux';
import * as loginActionCreator from '../../Store/Action/login';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';

class Login extends Component{

// Singup Means create account SignIn means login
   state={
   username:"",
   password:"",
   signInOrUp:"Log In",
   changeAction:"Sign Up",
   message:"Login here using your username and password",
   comment:""
}
componentDidMount(){
   if(!this.props.buildingBurger && this.props.RedirectPath!=='/'){
      this.props.setRedirectPath();
   }
}


submitHandler=(event)=>{
   event.preventDefault();
   this.props.onSubmitHandler(this.state.username,this.state.password,this.state.signInOrUp);
   
}

changeSignUpOrIn=()=>{
   if(this.state.signInOrUp==="Log In"){
      this.setState({
         ...this.state,
         signInOrUp:"Sign Up",
         changeAction:"Log In",
         message:"Enter Valid Email Id and minimum 6 digit Password"
      })
   }
   else{
      this.setState({
         ...this.state,
         signInOrUp:"Log In",
         changeAction:"Sign Up",
         message:"Login here using your username and password"
      })
   }

}

   handleName=(event)=>{
        
      this.setState({
         username:event.target.value
      });
  }
  handlePassword=(event)=>{
      this.setState({
         password:event.target.value
      });
  }
  render(){
   let errorComment=null
   if(this.props.error){
      errorComment=<p><b>{this.props.error}</b></p>
   }
   let spinner=<Spinner/>
   if(!this.props.spinOrNot)
      spinner=null

   // For Redirecting to Home Page after LogIn

   let successfullRedirect=null;
   if(this.props.isAuthenticated)
   successfullRedirect=<Redirect to={this.props.RedirectPath}/>

   
      return(
         <>
      <div className={classes.body1}>
      
      {successfullRedirect}
<div className={classes.overlay}>
{spinner}
<form className={classes.form} 
 onSubmit={(event)=>this.submitHandler} >
 
   {/* <!--   con = Container  for items in the form--> */}
   <div className={classes.con}>
   {/* <!--     Start  header Content  --> */}
   <header className={classes.header}>
   
      <h2 className={classes.headerh2}>{this.state.signInOrUp}</h2>
      {/* <!--     A welcome message or an explanation of the login form --> */}
      <p>{this.state.message}</p>
      
{errorComment}
   </header>
   {/* <!--     End  header Content  --> */}
   <br></br>
   <div >
     
      {/* <!--   user name --> */}
        
        {/* <!--   user name Input--> */}
         <input className={classes.inputForm} id="txt-input"
          type="email" placeholder="UserName"
          key="email" required
          value={this.state.username} 
                onChange={this.handleName.bind(this)} />   
      <br></br>
      {/* <!--   Password Input--> */}
      <input className={classes.inputForm} 
      type="password" placeholder="Password" id="pwd"  
      name="password" 
      key="passwrd"
      required
      value={this.state.password} 
                onChange={this.handlePassword.bind(this)} 
      />
      <br></br>
{/* <!--      button LogIn --> */}
      <button  className={classes.button1}
      onClick={this.submitHandler}> {this.state.signInOrUp} </button>
   </div>
  
{/* <!--   other buttons --> */}
   <div class="other">
{/* <!--      Forgot Password button--> */}
      <button    className={classes.submits+" "+classes.frgtpass+" "+classes.button1}>Forgot Password</button>
{/* <!--     Sign Up button --> */}
      <button className={classes.submits+" "+classes.signup+" "+classes.button1}
      onClick={this.changeSignUpOrIn}
      
      >{this.state.changeAction}
      </button>
{/* <!--      End Other the Division --> */}
   </div>
     
{/* <!--   End Conrainer  --> */}
  </div>
  
  {/* <!-- End Form -/-> */}
</form>
</div>
          </div>
          </>
      )
  }
}

const mapStateToProps=state=>{
   return{
      spinOrNot:state.login.loading,
      error:state.login.error.message,
      isAuthenticated:state.login.token!=null,
      buildingBurger:state.burger.building,
      RedirectPath:state.login.RedirectPath

   }
   
}

const mapDispatchToProps=dispatch=>{
   return{
      onSubmitHandler:
      (email,password,signInOrUp)=>dispatch(loginActionCreator.LoginUser(email,password,signInOrUp)),
      onRedirectToPath:()=>dispatch(loginActionCreator.setRedirectPath("/"))
   }
   
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);