import BurgerLogo from '../../asserts/images/burger.png';
import classes from '../Logo/Logo.module.css';
const Logo=(props)=>{

    return(
        <div className={classes.Logo}  style={
            {
                height:props.height,
                
            }
            }>
            <img src={BurgerLogo} alt="Burger Logo"></img>
        </div>
    );

}
export default Logo;