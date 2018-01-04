import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA='USER_DATA';
const initState={isAuth: false,user:'李云龙',age:18}
export function Auths(state=initState,action){
    console.log('state',state);
    switch(action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        case USER_DATA:
            return {...state,user:action.data.user,age:action.data.age}
        default:
            return state
    }

}
export function getUserData(){
    return dispatch=>{
        axios.get('/data').then(res=>{
            dispatch(userData(res.data[0]));
        
        })
    }
}
export function userData(data){
    return {type:USER_DATA,data:data}
}
// action creater
export function LOGINS (){
    return {type:'LOGIN'}
}
export function LOGOUTS (){
    return {type:'LOGOUT'}
}