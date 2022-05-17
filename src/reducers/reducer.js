const initialState=0;

const changeNumber=(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT" : return state +action.payload;
        case "DECREMENT" : return state -action.payload;
        default : return state;
    }

}
export default changeNumber;

export const changeCartNumber=(state=initialState,action)=>{
    // console.log('ac',action)
    switch(action.type){
        case "INCREASE_CART":return state + 1;
        case "DECREASE_CART":return state -action.payload;
        default : return state;
    }
}