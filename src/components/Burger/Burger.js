import Ingredients from './BurgerIngredients/Ingredients.js'
import classes from './Burger.module.css'
const Burger=(props)=>{
return(
    <div className={classes.burger}>
    
        <Ingredients type="bread-top"></Ingredients>
        <Ingredients type="meat" />
        <Ingredients type="cheese"/>
        <Ingredients type="bread-bottom" />
    </div>
);
}
export default Burger;