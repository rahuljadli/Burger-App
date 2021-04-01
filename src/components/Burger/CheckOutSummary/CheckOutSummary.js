import Button from '../../UI/Button/Button'
const CheckOutSummary=(props)=>{
const ingredients=props.ingredients;

const summaryDetails=Object.keys(ingredients).map(
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
<strong>Total {props.totalCost}:</strong>
<p>Do you want to checkout</p>
<Button clicked={props.buy} buttonType="Success">Confirm</Button>
<Button clicked={props.cancel} buttonType="Danger">Cancel</Button>

</>

    );
}
export default CheckOutSummary;