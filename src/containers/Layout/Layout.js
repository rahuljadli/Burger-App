import BurgerBuilder from "../BurgerBuilder/BurgerBuilder"
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import { Component } from "react";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state={
        showSideDrawer:false,
    }
     sideDrawerClosed=(props)=>{
     this.setState({showSideDrawer:false});
    }
    sideDrawerOpener=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
        
    }
    render(){
        return(   <>
            <Toolbar clicked={this.sideDrawerOpener}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosed}/>
            <main>
    {this.props.children}
            </main>
     
    
    <BurgerBuilder/> 
           </>
    )
    }
}

export default Layout;