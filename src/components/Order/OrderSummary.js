
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from '../Order/OrderSummary.module.css';
const OrderSummary=(props)=>{ 
    return(
        <div className={classes.OrderSummary}>
        <h3>Enjoy your Meal</h3>
        <div style={{
            width:'100%',
            margin:'auto',
            height:'300px'
        }}>
        <Burger ingredients={props.ingredients}/>
        
        </div>
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

   )
}

export default OrderSummary;