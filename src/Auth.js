import React,{Component} from 'react';
import {connect} from 'react-redux';
import {LOGINS} from './Auth.redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
// 两个reducers，每个reducers都有一个state
@connect(state=>state.Auths,{LOGINS})
class Authed extends Component{
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        axios.get('/data').then(res=>{
            console.log(res);
            this.setState({data:res.data});
        })
    }
    render(){
        return(
            <div>
                {this.props.isAuth? <Redirect to='/dashboards'/> : null}
                <h1>请登录</h1>
                <button onClick={this.props.LOGINS}>登陆</button>
            </div>
        );
    }
}
export default Authed;