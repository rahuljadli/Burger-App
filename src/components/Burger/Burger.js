import Ingredients from './BurgerIngredients/Ingredients.js'
import classes from './Burger.module.css'
const Burger=(props)=>{
    let dynamicIngredient=Object.keys(props.ingredients).map(
        (ingredientkey)=>{
            const amount=props.ingredients[ingredientkey];
            
            return [...Array(amount)].map(
                (c,index)=>{
                    
                    return <Ingredients type={ingredientkey} 
                    key={ingredientkey+c}/>;
                }
            )
        }
    ).reduce((prev,current)=>{
        return prev.concat(current)

    },[]);
    const padd={
        paddingTop:4
    }
    if(dynamicIngredient.length===0)
    dynamicIngredient=<p style={padd}>Please Select the topings</p>

    // Last value of reduce is the intializing value
return(
    <div className={classes.burger}>
    
        <Ingredients type="bread-top"></Ingredients>
        {dynamicIngredient}
        <Ingredients type="bread-bottom" />
        <p>Current Price: {props.totalPrice}</p>
    </div>
);
}
export default Burger;