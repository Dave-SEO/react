import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Auth from './Auth';
import Dashboard from './Dashboard';
// 处理异步
import thunk from 'redux-thunk';
import reducer from './reducers';
import './config';
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => { }
));

ReactDOM.render((<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path='/login' exact component={Auth}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Redirect to='/dashboard'></Redirect>
        </Switch>
       
    </BrowserRouter>
</Provider>), document.getElementById('root'));

