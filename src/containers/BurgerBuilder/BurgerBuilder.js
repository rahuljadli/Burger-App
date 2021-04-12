import { Component } from "react";
import Burger from "../../components/Burger/Burger.js"
import CheckOutSummary from "../../components/Burger/CheckOutSummary/CheckOutSummary.js";
import ToppingHandler from "../../components/Burger/ToppingController/ToppingHandler.js";
import Modal from '../../components/UI/Modal.js';
import Spinner from '../.../../../components/UI/Spinner/Spinner.js';
import {connect} from 'react-redux';

import * as actionTypes from '../../Store/action';


const INGREDIENT_PRICE={
    'cheese':10,
    'salad':10,
    'bacon':20,
    'meat':30
}
class BurgerBuilder extends Component{
    state={
        
        totalCost:0,
        purchasable:false,
        checkOutOrNot:false,
        spinnerStatus:false
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
    shouldComponentUpdate(nextProp,nextState){
        return true;
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
       

        // Commenting this out as we want to route it to checkout page when user clicks Confirm
        const queryParams=[]
        for(let i in this.state.ingredients)
        queryParams
        .push( encodeURIComponent(i) + '='
            +encodeURIComponent(this.state.ingredients[i]));

            queryParams.push('price='+this.state.totalCost);

        const queryString =queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryString
        });


    }
    render( ){
        console.log(this.props.ings)
        let spinnerComp=
        <CheckOutSummary 
            ingredients={this.props.ings}
            buy={this.buyBurgerHandler}
            cancel={this.BackdropClickHandler}
            totalCost={this.state.totalCost}
            />
        if(this.state.spinnerStatus)
        {
            spinnerComp=<Spinner/>
        }


        return(
            <>
                <Modal show={this.state.checkOutOrNot}
                BackdropClick={this.BackdropClickHandler}
                >

            {spinnerComp}
            
            </Modal>
       
            
            
            <Burger ingredients={this.props.ings}
                totalPrice={this.state.totalCost}
            />
            
            <ToppingHandler 
            addClick={this.props.onIngredientAdded} 
            minusClick={this.props.onIngredientRemoved} 
            ingredients={this.props.ings}
            purchasable={this.state.purchasable}
            checkOutClick={this.checkOutOrNot}
            />
            
            </>
            
            );
    };

}

const mapStatesToProps=state=>{
    return{
        ings:state.ingredients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIngredientAdded: (ingName) =>         
        dispatch({
          type: actionTypes.ADD_INGREDIENT,
          ingredientName: ingName,
        }),
      onIngredientRemoved: (ingName) =>
        dispatch({
          type: actionTypes.DELETE_INGREDIENT,
          ingredientName: ingName,
        }),
    };
  };


export default connect(mapStatesToProps,mapDispatchToProps)(BurgerBuilder);