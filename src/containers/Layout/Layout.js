
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import { Component } from "react";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';
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
            <Toolbar clicked={this.sideDrawerOpener}
            status={this.props.isAuthenticated}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosed}
            status={this.props.isAuthenticated}

            />
            <main>
    {this.props.children}
            </main>
     
    
           </>
    )
    }
}
const mapStateToProps=state=>{
    return{
        isAuthenticated:state.login.token!=null
    }
}

export default connect(mapStateToProps)(Layout);