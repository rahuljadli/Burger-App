import classes from '../SideBarToggler/MenuToggler.module.css'
const MenuToggler=(props)=>{
    return(
        <>
            <div onClick={props.clicked} >
            <div className={classes.div}></div>
<div className={classes.div}></div>
<div className={classes.div}></div>
</div>
        </>
    );
}
export default MenuToggler;