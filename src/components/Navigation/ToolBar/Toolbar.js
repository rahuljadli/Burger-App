
import classes from './Toolbar.module.css';
import Logo from '../../../containers/Logo/Logo';
import NavigationItems from '../../../containers/Navigation/NavigationItems/NavigationItems';
const Toolbar=()=>{
    return(
        <header className={classes.Toolbar}>
        <div style={{
            fontSize:20,
            color:"white"
        }}>Menu</div>
        
        <Logo></Logo>
        <nav>
        <NavigationItems></NavigationItems>
        </nav>
        </header>
    )
}
export default Toolbar;