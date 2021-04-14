
// This  Action is responsible for all the action that are dispatched w.r.t Burger Building
import * as actionTypes from '../Action/action'

export const addIngredient=(name)=>{
    return{
        type: actionTypes.ADD_INGREDIENT,
          ingredientName: name

    }
}


export const removeIngredient=(name)=>{
    return{
        type: actionTypes.DELETE_INGREDIENT,
        ingredientName: name
    }
}
export const startIngredient=()=>{
    return{
        type: actionTypes.BURGER_PURCHASE_START
    }
}
