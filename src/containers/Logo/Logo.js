import BurgerLogo from '../../asserts/images/burger.png';
import classes from '../Logo/Logo.module.css';
const Logo=()=>{

    return(
        <div className={classes.Logo}>
            <img src={BurgerLogo} alt="Burger Logo"></img>
        </div>
    );

}
export default Logo;