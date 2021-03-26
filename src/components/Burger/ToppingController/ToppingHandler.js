import Toppings from './Toppings.js'
import classes from './ToppingHandler.module.css';
const ToppingHandler=(props)=>{
return(
    <div className={classes.ToppingHandler}>
    <Toppings label="cheese" add={props.addClick} minus={props.minusClick}
        disabledOrNot={props.ingredients}
    />
    <Toppings label="bacon" add={props.addClick}  minus={props.minusClick}
         disabledOrNot={props.ingredients}
    />
    <Toppings label="salad" add={props.addClick}  minus={props.minusClick} 
         disabledOrNot={props.ingredients}
    />
    <Toppings label="meat" add={props.addClick}  minus={props.minusClick}
         disabledOrNot={props.ingredients}
    />
    </div>
)
}
export default ToppingHandler;