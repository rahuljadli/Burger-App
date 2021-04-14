import * as actionTypes from './action';
import axios from '../../AxiosInstance';

export const BurgerPurchaseSuccessful=(orderData)=>{
    return{
        type:actionTypes.BURGER_PURCHASE_SUCCESSFULL,
        orderData:orderData

    }
}
export const BurgerPurchaseFail=(error)=>{
    return{
        type:actionTypes.BURGER_PURCHASE_FAIL
        ,error:error
    }
}

export const purchaseBurger=(orderData)=>{
    return (dispatch)=>{
        axios.post('orders.json',orderData).then(
            response=>{
               dispatch(BurgerPurchaseSuccessful(response.data))
                

            }
        ).catch(error=>{
            dispatch(BurgerPurchaseFail(error))
        })
    }
}

export const fetchOrderSuccess=(orders)=>{
    return{
        type:actionTypes.FETCH_ORDER_SUCCESSFULL,
        orders:orders
       
    }
}
export const fetchOrderFail=(error)=>{
    return{
        type:actionTypes.FETCH_ORDER_FAIL,
        error:error
       
    }
}

export const fetchOrderStart=()=>{
    return{
        type:actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrder=()=>{
    return dispatch=>{
        dispatch(fetchOrderStart())
        axios.get("/orders.json").then(
            response=>{
                const fetchedOrders=[];
                for(let key in response.data){
                       fetchedOrders.push({
                           ...response.data[key],
                           id:key
                      }) 
                }
                dispatch(fetchOrderSuccess(fetchedOrders))
                }
        ).catch(error=>{
            dispatch(fetchOrderFail(error))
        });
    }
}
