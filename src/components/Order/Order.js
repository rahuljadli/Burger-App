import classes from './Order.module.css';
const Order=(props)=>{
   let ingredientDetail=""
    for(let key in props.ingredients){
       ingredientDetail+=key+"("+props.ingredients[key]+") "
    
    }
    
    return(<div className={classes.Order}>
        <p style={{textTransform:'capitalize'}}>Ingredients: <strong>{ingredientDetail}</strong> </p>
        <p>
            Total Price <strong>{props.price}</strong>
        </p>
    </div>)
}
export default Order;