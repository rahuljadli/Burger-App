
import classes from './Toppings.module.css';
const Toppings=(props)=>{
    console.log(props)
return(
    <div className={classes.Toppings}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} 
    onClick={()=>props.add(props.label)} >Add</button>
    <button className={classes.Less} onClick={()=> props.minus(props.label)}
    disabled={props.disabledOrNot[props.label]===0}
    >Minus</button>

    </div>
)
}
export default Toppings;