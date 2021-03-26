
const CheckOutSummary=(props)=>{
const ingredients=props.ingredients;

const summaryDetails=Object.keys(ingredients).map(
    (ingredientkey)=>{
        return(
            <li>
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

<button>Do you want to checkout</button>


</>

    );
}
export default CheckOutSummary;