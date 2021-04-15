import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
const NavigationItems=()=>{
    return(
        <ul className={classes.NavigationItems}>
    <NavigationItem link="/" >Build Burger</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    <NavigationItem link="/login">Login</NavigationItem>
        </ul>
    )
}

export default NavigationItems;