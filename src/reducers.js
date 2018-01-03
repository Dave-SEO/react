// 合并所有reducers，并返回
import {combineReducers} from 'redux';
import {counter} from './index.redux';
import {Auths} from './Auth.redux';
export default combineReducers({counter,Auths});