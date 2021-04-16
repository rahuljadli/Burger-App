
// This the Burger Reducer
import * as actionTypes from '../Action/action';
const initialState=
{
    ingredients:{
    cheese:0,
   salad:0,
    bacon:0,
    meat:0 },
totalCost:0,
building:false
}
const INGREDIENT_PRICE={
    'cheese':10,
    'salad':10,
    'bacon':20,
    'meat':30
}

const reducer=(state=initialState,action)=>{
  
    switch(action.type)
    {
    case actionTypes.ADD_INGREDIENT:
        
        return {
               
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]:state.ingredients[action.ingredientName]+1
            },
            totalCost:state.totalCost+ INGREDIENT_PRICE[action.ingredientName],
            building:true
        }
    case actionTypes.DELETE_INGREDIENT:
        return {

            ...state,
            ingredients:{
                ...state.ingredients,
                // This [action.ingred] is used to get dynamic data here
                // using action.ingredientNam won't work it will throw error
                // because its value wont be used rather whole will act as a variable name
                [action.ingredientName]:state.ingredients[action.ingredientName]-1
            },
            totalCost:state.totalCost-INGREDIENT_PRICE[action.ingredientName],
            building:true
        }
        case actionTypes.RESET_INGREDIENT:
            
            return{
                ingredients:{
                    cheese:0,
                   salad:0,
                    bacon:0,
                    meat:0 },
                totalCost:0,
                building:false
            }
            case actionTypes.BURGER_PURCHASE_START:
            
            return{
                ...state,
                ingredients:{
                    ...state.ingredients
                },
                ...state.totalCost

            }
        default:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients
                }

            }
    }
}

export default reducer;