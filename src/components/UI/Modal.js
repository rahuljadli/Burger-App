import classes from './Modal.module.css'
import Backdrop from './Backdrop/Backdrop.js'
const Modal=(props)=>{
    return(

        <>
        <Backdrop show={props.show} BackdropClick={props.BackdropClick}/>
        <div className={classes.Modal}
        style={{
            transform:props.show? 'translateY(0)': 'translateY(-100vh)',
            opacity:props.show? '1':'0'
        }}
        >

            {props.children}
        </div>
        </>

        );
}
export default Modal;