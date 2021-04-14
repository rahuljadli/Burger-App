import Button from '../../UI/Button/Button';
import {connect} from 'react-redux'
const CheckOutSummary=(props)=>{
const ingredients=props.ingredients;

const summaryDetails=Object.keys(props.ings).map(
    (ingredientkey)=>{
        return(
            <li key={ingredientkey}>
                <span style={{textTransform:'capitalize'}}>
                {ingredientkey}:{ingredients[ingredientkey]}
                </span>
            </li>


        );
    }

)
    return(

<>
<p>Your Order Details:</p>

    {summaryDetails}
<br></br>
<strong>Total {props.price}:</strong>
<p>Do you want to checkout</p>
<Button clicked={props.buy} buttonType="Success">Confirm</Button>
<Button clicked={props.cancel} buttonType="Danger">Cancel</Button>

</>

    );
}
const mapStateToProps=state=>{
    return{
        ings:state.burger.ingredients,
        price:state.burger.totalCost
    }
}

export default connect(mapStateToProps)(CheckOutSummary);