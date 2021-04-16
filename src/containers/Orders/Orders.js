import { Component } from "react";
import Order from '../../components/Order/Order';
import { connect } from "react-redux";
import * as OrderActionCreator from '../../Store/Action/order';
import Spinner from '../../components/UI/Spinner/Spinner';
class Orders extends Component{
  
    
    componentDidMount(){
        this.props.onFetchOrders(this.props.token,this.props.userId);
        
    }
    render(){
        let content=<Spinner></Spinner>
        if(!this.props.loading){
            content= 
                this.props.orders.map(order=>{return <Order 
                    id={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />})
            
        }
        return(<>
    
            <div>
               {content}
            </div>

        </>);
    }
}

const mapStateToProps=state=>{
    return{
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.login.token,
        userId:state.login.userId
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchOrders:(token,userId)=>dispatch(OrderActionCreator.fetchOrder(token,userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders);