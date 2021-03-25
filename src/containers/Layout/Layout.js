import BurgerBuilder from "../BurgerBuilder/BurgerBuilder"

const Layout=(props)=>{
    return(

        <>
        <div>TodoList SideBar Backdrop</div>
        <main>
{props.children}
        </main>
 

<BurgerBuilder/> 
       </>

    );
}

export default Layout;