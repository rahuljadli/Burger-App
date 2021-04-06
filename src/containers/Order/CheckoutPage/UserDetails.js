import { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from '../CheckoutPage/UserDetails.module.css';
import axios from '../../../AxiosInstance';
class UserDetails extends Component{

state={
    users:{
        name:'rahul jadli',
        age:'23',
        email:'rahul@gmail.com'
    }
}
    orderHandler(){
        console.log("order Placed")
        const ingre=this.props.ingredients
        const updatedIngredient={

        }
        for(let k in ingre){
            updatedIngredient[k]=ingre[k]
        }
        console.log(updatedIngredient)
        const order={
            ingredients:updatedIngredient,
            price:this.props.totalCost,
            customer:this.state.users
        }
        axios.post('orders.json',order).then(
            response=>{
                console.log(response);
            }
        ).catch(error=>{
            console.log(error);
        })
        


    }
    render(){
        console.log(this.props)
        return(
            <div className={classes.UserDetails}>
                <h4>Enter Your Details</h4>
                <form style={{textAlign:'center',
                               paddingLeft:'370px' }}>
                <input  className={classes.Input} name="name"
                 type="text" placeholder="Enter your Name" />
                <input className={classes.Input} name="age"
                type="text" placeholder="Enter your age" />
                <input className={classes.Input} type="text" name="email"
                 placeholder="Enter your Email ID" />
               
                    </form>
                    <Button 
        buttonType="Success" 
            clicked={()=>this.orderHandler()}>
            Confirm
        </Button>
            </div>
                    )
    }
}
export default UserDetails;