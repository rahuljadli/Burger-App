
import classes from './Toolbar.module.css';
import Logo from '../../../containers/Logo/Logo'
const Toolbar=()=>{
    return(
        <header className={classes.Toolbar}>
        <div>Menu</div>
        
        <Logo></Logo>
        <nav>...</nav>
        </header>
    )
}
export default Toolbar;