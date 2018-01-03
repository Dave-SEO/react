import React, { Component } from 'react';
import {Link,Route,Redirect} from 'react-router-dom';
import {LOGOUTS,LOGINS} from './Auth.redux';
import {connect} from 'react-redux';


function Page1() {
    return <h2>Page1页面</h2>
}
function Page2() {
    return <h2>Page2页面</h2>
}
// class Page3 extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         console.log(this.props.Auths)
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>404</h1>
//             </div>
//         );
//     }
// }
@connect(state=>state.Auths,{LOGOUTS,LOGINS})
class Dashboard extends Component {
 
    render() {
        console.log('...',this.props.match);
        const match =this.props.match;
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                {this.props.isAuth?<button onClick={this.props.LOGOUTS}>退出</button>:null}
                <ul>
                    <li><Link to={`${match.url}`} >page1</Link></li>
                    <li><Link to={`${match.url}/page2`}>page2</Link></li>
                    {/* <li><Link to='/dashboard/page3'>page3</Link></li> */}
                </ul>
                <Route path={`${match.url}`} exact component={Page1}></Route>
                <Route path={`${match.url}/page2`} component={Page2}></Route>
                {/* <Route path='/dashboard/page3' component={Page3}></Route> */}
            </div> 
        );
        return this.props.isAuth?app:redirectToLogin;
    }
}
export default Dashboard;