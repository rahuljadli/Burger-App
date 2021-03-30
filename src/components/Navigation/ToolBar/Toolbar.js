
import classes from './Toolbar.module.css';
import Logo from '../../../containers/Logo/Logo';
import SideDrawer from '../SideDrawer/SideDrawer'
import NavigationItems from '../../../containers/Navigation/NavigationItems/NavigationItems';
import Menu from '../../../containers/Navigation/SideBarToggler/MenuToggler';
const Toolbar=(props)=>{
    return(
        <header className={classes.Toolbar}>
        <div style={{
            fontSize:20,
            color:"white"
        }}>
        
        <Menu clicked={props.clicked }/>
        </div>
        <SideDrawer></SideDrawer>
        <Logo></Logo>
        <nav className={classes.desktopOnly}>
        <NavigationItems>

        </NavigationItems>
        </nav>
        </header>
    )
}
export default Toolbar;