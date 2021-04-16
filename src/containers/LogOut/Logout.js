import {Redirect} from 'react-router-dom';
import {Component} from 'react';
import {connect} from 'react-redux';
import * as logOutActionCreator from '../../Store/Action/login';
class LogOut extends Component{
    componentDidMount(){
        this.props.onLogout();
    }
    render(){
        return <Redirect to="/"/>
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onLogout:()=>dispatch(logOutActionCreator.LogOut())
    }
}
export default connect(null,mapDispatchToProps)(LogOut);