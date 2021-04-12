import * as actionTypes from './action';
const initialState=
{
    ingredients:{
    cheese:0,
   salad:0,
    bacon:0,
    meat:0
                },
totalCost:0
}

const reducer=(state=initialState,action)=>{
    console.log("hi")
    console.log(action.ingredientName);
    switch(action.type)
    {
    case actionTypes.ADD_INGREDIENT:
        console.log(action.ingredientName);
        return {
               
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]:state.ingredients[action.ingredientName]+1
            }
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
            }
        }
        default:
            return state
    }
}

export default reducer;