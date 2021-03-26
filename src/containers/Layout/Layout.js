import BurgerBuilder from "../BurgerBuilder/BurgerBuilder"
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
const Layout=(props)=>{
    return(

        <>
        <Toolbar></Toolbar>
        <main>
{props.children}
        </main>
 

<BurgerBuilder/> 
       </>

    );
}

export default Layout;