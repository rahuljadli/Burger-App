
import './App.css';
import Layout from './containers/Layout/Layout'
import classes from './containers/Layout/Layout.module.css'
import CheckOut from './containers/Order/CheckOut';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <div className="App">
      <Layout className={classes.Layout}>

    <Switch>
      <Route path="/checkout" component={CheckOut}/>

      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/orders" component={Orders}/>
    </Switch>
 

      </Layout>
    </div>
  );
}

export default App;
