import { Component } from "react";
import OrderSummary from '../../components/Order/OrderSummary';
class CheckOut extends Component{

    state={
        ingredients:{
            cheese:1,
            salad:1,
           
            bacon:1,
            meat:1
        }
    }
    render(){
        return(
            <OrderSummary ingredients={this.state.ingredients}/>

        );
    }
}
export default CheckOut;