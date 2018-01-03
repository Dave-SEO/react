
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
export function Auths(state={isAuth: false,name:'李云龙'},action){
    switch(action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        default:
            return state
    }

} 
// action creater
export function LOGINS (){
    return {type:'LOGIN'}
}
export function LOGOUTS (){
    return {type:'LOGOUT'}
}