import { Component } from "react";
import Order from '../../components/Order/Order';
import axios from '../../AxiosInstance';
class Orders extends Component{
    state={
        orders:[]
    }
    
    componentDidMount(){
        axios.get("/orders.json").then(

            response=>{
                console.log("response")
                
                console.log(response)
                const fetchedOrders=[];
                for(let key in response.data){
                       fetchedOrders.push({
                           ...response.data[key],
                           id:key

                       }) 
                }
                this.setState({
                    orders: fetchedOrders
                });
                console.log(this.state.orders)
            }
        ).catch(error=>{
            console.log(error)
        });
    }
    render(){
        return(<>
    
            <div>
                {
                    this.state.orders.map(order=>{return <Order 
                        id={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />})
                }
            </div>

        </>);
    }
}
export default Orders;