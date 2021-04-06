import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
const NavigationItems=()=>{
    return(
        <ul className={classes.NavigationItems}>
    <NavigationItem link="/" >Build Your Burger</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>

        </ul>
    )
}

export default NavigationItems;