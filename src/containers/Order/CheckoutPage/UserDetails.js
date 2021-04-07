import { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from '../CheckoutPage/UserDetails.module.css';
import axios from '../../../AxiosInstance';
class UserDetails extends Component{

state={
    
        name:'rahul',
        age:'23',
        email:'rahul@gmail.com'
   
}
    orderHandler(){


        // Code for retreiving data from form
        const users={
            name:this.state.name,
            age:this.state.age,
            email:this.state.email
        }
        console.log("Showing user details")

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
            customer:users
        }
        axios.post('orders.json',order).then(
            response=>{
                console.log("placed")
            }
        ).catch(error=>{
            console.log(error);
        })

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
                onSubmit={()=>this.orderHandler(this)}
                
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
                          <Button
                         
        buttonType="Success" 
            >
            Confirm
        </Button>
                    </form>
          
                
            </div>
                    )
    }
}
export default UserDetails;