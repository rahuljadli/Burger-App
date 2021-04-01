import { Component } from "react";
import Burger from "../../components/Burger/Burger.js"
import CheckOutSummary from "../../components/Burger/CheckOutSummary/CheckOutSummary.js";
import ToppingHandler from "../../components/Burger/ToppingController/ToppingHandler.js";
import Modal from '../../components/UI/Modal.js';

import axios from '../../AxiosInstance';

const INGREDIENT_PRICE={
    'cheese':10,
    'salad':10,
    'bacon':20,
    'meat':30
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            cheese:0,
            salad:0,
           
            bacon:0,
            meat:0
        },
        totalCost:0,
        purchasable:false,
        checkOutOrNot:false
    }

    addToppings=(type)=>{
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredients
        }
        updatedIngredient[type]=newCount;
        const  addedPrice=INGREDIENT_PRICE[type];
        const newPrice=this.state.totalCost+addedPrice;
        this.setState({
            ingredients:updatedIngredient,
            totalCost:newPrice
        })

        this.checkCart(updatedIngredient);


    }
    checkCart=(updatedIngredient)=>{
        const ingredients={...updatedIngredient}
        let checkoutCount=Object.keys(ingredients).map(
            (ingredientkey)=>{
                return ingredients[ingredientkey];

            }

        ).reduce((prev,current)=>{
                return prev+current;
        },0);

        this.setState({purchasable:checkoutCount>0})



    
    }
    removeToppings=(type)=>{
        let oldCount=this.state.ingredients[type];
        let newCount=0
        if(oldCount===0){
           
        }
        else{
            newCount=oldCount-1;
        
        }
        const updatedIngredient={
            ...this.state.ingredients
        }
        updatedIngredient[type]=newCount;
        const  addedPrice=INGREDIENT_PRICE[type];
         let oldTotalCost=this.state.totalCost;
         let newPrice=0;
         
         if(oldTotalCost===0){
           
        }
        else{
            newPrice=oldTotalCost-addedPrice;
        
        }   
        
        this.setState({
            ingredients:updatedIngredient,
            totalCost:newPrice
        })


        this.checkCart(updatedIngredient);
    }
     checkOutOrNot=()=>{
        this.setState({
            checkOutOrNot:true
        });

    }

    BackdropClickHandler=()=>{
        this.setState({
            checkOutOrNot:false
        })
    }

    buyBurgerHandler=()=>{
        const order={
            ingredients:this.state.ingredients,
            price:this.state.totalCost,
            customer:{
                name:'rahul',
                age:'23'
            }
        }
        axios.post('orders.json',order).then(
            response=>{
                console.log(response);
            }
        ).catch(error=>{
            console.log(error);
        })


    }
    render( ){
        return(
            <>
                <Modal show={this.state.checkOutOrNot}
                BackdropClick={this.BackdropClickHandler}
                >


            <CheckOutSummary ingredients={this.state.ingredients}

buy={this.buyBurgerHandler}
cancel={this.BackdropClickHandler}
totalCost={this.state.totalCost}
            />
            </Modal>
       
            
            
            <Burger ingredients={this.state.ingredients}
                totalPrice={this.state.totalCost}
            />
            
            <ToppingHandler 
            addClick={this.addToppings} minusClick={this.removeToppings} 
            ingredients={this.state.ingredients}
            purchasable={this.state.purchasable}
            checkOutClick={this.checkOutOrNot}
            />
            
            </>
            
            );
    };

}
export default BurgerBuilder;