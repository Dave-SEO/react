const ADD = 'add';
const SUBTRACTION = 'subtraction'

export function counter(state = 0, action) {
    switch (action.type) {
        case ADD:
            return state + 1;
        case SUBTRACTION:
            return state - 1;
        default:
            return 10;
    }
}
export function addNum() {
    return { type: ADD }
}
export function subtr() {
    return { type: SUBTRACTION }
}
export function addNumAsync() {
    return dispath=>{
        setTimeout(()=>{
            dispath(addNum());
        },2000);
    }
}