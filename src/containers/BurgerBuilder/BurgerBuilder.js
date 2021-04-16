import { Component } from "react";
import Burger from "../../components/Burger/Burger.js"
import CheckOutSummary from "../../components/Burger/CheckOutSummary/CheckOutSummary.js";
import ToppingHandler from "../../components/Burger/ToppingController/ToppingHandler.js";
import Modal from '../../components/UI/Modal.js';
import Spinner from '../.../../../components/UI/Spinner/Spinner.js';
import {connect} from 'react-redux';

import * as burgerBuilderAction from '../../Store/Action/BurgerBuilder';



class BurgerBuilder extends Component{
    state={
        
        totalCost:0,
        purchasable:false,
        checkOutOrNot:false,
        spinnerStatus:false
    }

    // addToppings=(type)=>{
    //     const oldCount=this.state.ingredients[type];
    //     const newCount=oldCount+1;
    //     const updatedIngredient={
    //         ...this.state.ingredients
    //     }
    //     updatedIngredient[type]=newCount;
    //     const  addedPrice=INGREDIENT_PRICE[type];
    //     const newPrice=this.state.totalCost+addedPrice;
    //     this.setState({
    //         ingredients:updatedIngredient,
    //         totalCost:newPrice
    //     })

    //     this.checkCart(updatedIngredient);


    // }
    // shouldComponentUpdate(nextProp,nextState){
    //     return true;
    // }
    
    // removeToppings=(type)=>{
    //     let oldCount=this.state.ingredients[type];
    //     let newCount=0
    //     if(oldCount===0){
           
    //     }
    //     else{
    //         newCount=oldCount-1;
        
    //     }
    //     const updatedIngredient={
    //         ...this.state.ingredients
    //     }
    //     updatedIngredient[type]=newCount;
    //     const  addedPrice=INGREDIENT_PRICE[type];
    //      let oldTotalCost=this.state.totalCost;
    //      let newPrice=0;
         
    //      if(oldTotalCost===0){
           
    //     }
    //     else{
    //         newPrice=oldTotalCost-addedPrice;
        
    //     }   
        
    //     this.setState({
    //         ingredients:updatedIngredient,
    //         totalCost:newPrice
    //     })


    //     this.checkCart(updatedIngredient);
    // }
     checkOutOrNot=()=>{

        if(this.props.isAuthenticated)
        {this.setState({
            checkOutOrNot:true
        });
    }
    else{
        this.props.history.push("/login");
    }

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
        
        return checkoutCount>0 ?  true: false;
      
    }

    BackdropClickHandler=()=>{
        this.setState({
            checkOutOrNot:false
        })
    }

    buyBurgerHandler=()=>{
       

        // Commenting this out as we want to route it to checkout page when user clicks Confirm
        // const queryParams=[]
        // for(let i in this.state.ingredients)
        // queryParams
        // .push( encodeURIComponent(i) + '='
        //     +encodeURIComponent(this.state.ingredients[i]));

        //     queryParams.push('price='+this.state.totalCost);

        // const queryString =queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout'
        });


    }
    render( ){
        
        let spinnerComp=
        <CheckOutSummary 
            ingredients={this.props.ings}
            buy={this.buyBurgerHandler}
            cancel={this.BackdropClickHandler}
            totalCost={this.props.price}
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
                totalPrice={this.props.price}
            />
            
            <ToppingHandler 
            addClick={this.props.onIngredientAdded} 
            minusClick={this.props.onIngredientRemoved} 
            ingredients={this.props.ings}
            purchasable={this.checkCart(this.props.ings)}
            checkOutClick={this.checkOutOrNot}
            isAuth={this.props.isAuthenticated}
            />
            
            </>
            
            );
    };

}

const mapStatesToProps=state=>{
    return{
        ings:state.burger.ingredients,
        price:state.burger.totalCost,
        isAuthenticated:state.login.token!=null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIngredientAdded: (ingName) =>         
        dispatch(burgerBuilderAction.addIngredient(ingName)),
      onIngredientRemoved: (ingName) =>
        dispatch(burgerBuilderAction.removeIngredient(ingName)),
        onPurhcaseStart:()=> dispatch(burgerBuilderAction.startIngredient())
    };
  };


export default connect(mapStatesToProps,mapDispatchToProps)(BurgerBuilder);