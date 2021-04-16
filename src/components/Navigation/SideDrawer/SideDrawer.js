
import NavigationItems from '../../../containers/Navigation/NavigationItems/NavigationItems';
import classes from '../SideDrawer/SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../../containers/Logo/Logo';

const SideDrawer=(props)=>{

    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];}
    return(
        <>  <Backdrop show={props.open} clicked={props.closed}/>
            <div  className={attachedClasses.join(' ')}>
        <Logo height="11%"></Logo>
    <NavigationItems status={props.status}/>

        </div>
        </>
    );
}
export default SideDrawer;