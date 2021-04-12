import { Component } from "react";
import OrderSummary from '../../components/Order/OrderSummary';
import {Route} from 'react-router-dom';
import UserDetails from './CheckoutPage/UserDetails';
import {connect} from 'react-redux';
class CheckOut extends Component{

    componentWillMount(){
        // const query=new URLSearchParams(this.props.location.search);
        // const updatedIngredient=[]
        // let totalCost=0
        // for(let param of query.entries()){
        //     if(param[0]==='price'){
        //         totalCost=param[1]
        //     }
        //     else{
        //         updatedIngredient[param[0]]=+param[1]
        
        //     }
        //     }
        // this.setState({
        //     ingredients:updatedIngredient,
        //     totalCost:totalCost
        // })
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
            ingredients={this.props.ings}
                CheckOutCancel={this.CheckOutCancelHandler}
                CheckOutContinue={this.CheckOutContinueHandler}
            />
            <Route path={this.props.match.path+'/checkoutPage'} 
           
            component={UserDetails}

            />
            </>
        );
    }
}

const mapStateToProps=state=>{
    return{
        ings:state.ingredients,
        price:state.totalCost
    }
}
export default connect(mapStateToProps)(CheckOut);