
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from '../Order/OrderSummary.module.css';
import {connect} from 'react-redux'
const OrderSummary=(props)=>{ 
    return(
        <div className={classes.OrderSummary}>
        
        <div style={{
            width:'100%',
            margin:'auto',
            height:'440px'
        }}>
        <Burger ingredients={props.ingredients}
            totalPrice={props.price}
        />
        <Button 
        clicked={props.CheckOutContinue}
        buttonType="Success">
            Confirm
        </Button>
        <Button
        clicked={props.CheckOutCancel}
         buttonType="Danger">
Cancel        </Button>
        </div>
        

        </div>

   )
}
const mapStatesToProps=state=>{
    return{
        ings:state.ingredients,
        price:state.totalCost
    }
}
export default connect(mapStatesToProps)(OrderSummary);