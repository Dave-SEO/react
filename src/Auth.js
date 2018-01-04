import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGINS, getUserData } from './Auth.redux';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';
// 两个reducers，每个reducers都有一个state
@connect(state => state.Auths, { LOGINS, getUserData })
class Authed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
      
        // axios.get('/data').then(res => {
        //     console.log(res.data[0]);
        //     this.setState({ data: res.data[0] })
        // })
        // console.log(this.props.getUserData());
        
       this.props.getUserData()
    }
    render() {
        return (
            <div>
                {/* {this.state.data.user}---{this.state.data.age} */}
                {this.props.user}and {this.props.age}
                {this.props.isAuth ? <Redirect to='/dashboards' /> : null}
                {/* <h1>请登录 </h1>{this.props.name} */}
                <button onClick={this.props.LOGINS}>登陆</button>
            </div>
        );
    }
}
export default Authed;