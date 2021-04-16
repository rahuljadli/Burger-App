import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
    <NavigationItem link="/" >Build Burger</NavigationItem>
    {props.status?<NavigationItem link="/orders">Orders</NavigationItem>:null}
    {!props.status?<NavigationItem link="/login">LogIn</NavigationItem>
    :<NavigationItem link="/logOut">LogOut</NavigationItem>
    }
        </ul>
    )
}

export default NavigationItems;