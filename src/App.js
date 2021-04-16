
import './App.css';
import Layout from './containers/Layout/Layout'
import classes from './containers/Layout/Layout.module.css'
import CheckOut from './containers/Order/CheckOut';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import {Route,Switch,Redirect} from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Login from './containers/Login/Login';
import LogOut from './containers/LogOut/Logout';
import {connect} from 'react-redux'
import * as actionCreators from './Store/Action/login';
import {useEffect} from 'react'

function App(props) {

  useEffect(() => {
    console.log("Did Mount")
    props.onLoadingCheckLogin();
  });

let routes=(
  <switch>
    <Route path="/login" component={Login}/>
      <Route path="/" exact component={BurgerBuilder}/>
      <Redirect to="/"></Redirect>
  </switch>
)
if (props.isAuthenticated){
  routes=(
    <switch>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={LogOut}/>
      <Route path="/checkout" component={CheckOut}/>
      <Route path="/orders" component={Orders}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to="/"></Redirect>
    </switch>)

}

  return (
    <div className="App">
      <Layout className={classes.Layout}>

    {routes}
 

      </Layout>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
isAuthenticated:state.login.token!==null
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onLoadingCheckLogin:()=>dispatch(actionCreators.logInCheck())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
