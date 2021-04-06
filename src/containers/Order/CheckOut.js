import { Component } from "react";
import OrderSummary from '../../components/Order/OrderSummary';
import {Route} from 'react-router-dom';
import UserDetails from './CheckoutPage/UserDetails';
class CheckOut extends Component{

    state={
        ingredients:null,
        totalCost:40
    }
    componentWillMount(){
        const query=new URLSearchParams(this.props.location.search);
        const updatedIngredient=[]
        let totalCost=0
        for(let param of query.entries()){
            if(param[0]==='price'){
                totalCost=param[1]
            }
            else{
                updatedIngredient[param[0]]=+param[1]
        
            }
            }
        this.setState({
            ingredients:updatedIngredient,
            totalCost:totalCost
        })
    }
    CheckOutCancelHandler=()=>{
        this.props.history.goBack();

    }
    CheckOutContinueHandler=()=>{
        this.props.history.replace('/checkout/checkoutPage');
        
    }
    render(){
        return(
            <>
            <OrderSummary 
            ingredients={this.state.ingredients}
                CheckOutCancel={this.CheckOutCancelHandler}
                CheckOutContinue={this.CheckOutContinueHandler}
            />
            <Route path={this.props.match.path+'/checkoutPage'} 
           

           render={props => (
                <UserDetails ingredients={this.state.ingredients}
                totalCost={this.state.totalCost} {...props} />
            )}

            />
            </>
        );
    }
}
export default CheckOut;