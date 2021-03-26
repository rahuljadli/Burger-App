import { Component } from "react";
import Burger from "../../components/Burger/Burger.js"
import ToppingHandler from "../../components/Burger/ToppingController/ToppingHandler.js";

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
        totalCost:0
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


    }
    render( ){
        return(
            <>
            <Burger ingredients={this.state.ingredients}/>
            <ToppingHandler 
            addClick={this.addToppings} minusClick={this.removeToppings} 
            ingredients={this.state.ingredients}
            />
            </>
            
            );
    };

}
export default BurgerBuilder;