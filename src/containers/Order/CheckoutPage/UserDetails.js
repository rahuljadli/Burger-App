import { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from '../CheckoutPage/UserDetails.module.css';
import axios from '../../../AxiosInstance';
import {connect} from 'react-redux';
import * as actionTypes from '../../../Store/action'
class UserDetails extends Component{

state={
    
        name:'rahul',
        age:'23',
        email:'rahul@gmail.com'
   
}

resetHandler(){
    console.log("resetHandler")
    this.props.resetHandlerCall()
}
    orderHandler(event){

        event.preventDefault();
        // Code for retreiving data from form
        const users={
            name:this.state.name,
            age:this.state.age,
            email:this.state.email
        }
        console.log("Showing user details")

        console.log("order Placed")
        const ingre=this.props.ings
        const updatedIngredient={

        }
        for(let k in ingre){
            updatedIngredient[k]=ingre[k]
        }
        const order={
            ingredients:updatedIngredient,
            price:this.props.price,
            customer:users
        }
        axios.post('orders.json',order).then(
            response=>{
                console.log("placed")
                

            }
        ).catch(error=>{
            console.log(error);
        })
        this.resetHandler()
        
        this.props.history.push('/')
    }
    handleName=(event)=>{
        
        this.setState({
            name:event.target.value
        });
    }
    handleAge=(event)=>{
        this.setState({
            age:event.target.value
        });
    }
    handleEmail=(event)=>{
        this.setState({
            email:event.target.value
        });
    }
    
    render(){
        return(
            <div className={classes.UserDetails}>
                <h4>Enter Your Details</h4>
                <form
                onSubmit={(event)=>this.orderHandler(event)}
                
                style={{textAlign:'center',
                               paddingLeft:'370px' }}>
                <input required 
                value={this.state.name} 
                onChange={this.handleName.bind(this)}

                className={classes.Input} name="name"
                 type="text" placeholder="Enter your Name" />

                <input required 
                className={classes.Input} 
                value={this.state.age} 
                onChange={this.handleAge.bind(this)}
                name="age"
                type="text" 
                placeholder="Enter your age" />
                <input required 
                value={this.state.email} 
                onChange={this.handleEmail.bind(this)}
                className={classes.Input}
                 type="email" 
                 name="email"
                 placeholder="Enter your Email ID" />
                          <Button type="submit"
                         
        buttonType="Success" 
            >
            Confirm
        </Button>
                    </form>
          
                
            </div>
                    )
    }
}

const mapStatesToProps=state=>{
    return{
        ings:state.ingredients,
        price:state.totalCost
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        resetHandlerCall:()=>         
        dispatch({
          type: actionTypes.RESET_INGREDIENT
        })
    }
}
export default connect(mapStatesToProps,mapDispatchToProps)(UserDetails);