export const incNumber=(num)=>{
    return{
        type:"INCREMENT",
        payload:num
    }
}

export const decNumber=(number)=>{
    return{
        type:"DECREMENT",
        payload:number
    }
}

export const cartIncrement=()=>{
    return{
        type:"INCREASE_CART"
    }
}
export const cartDecrement=(numeric)=>{
    return{
        type:"DECREASE_CART",
        payload:numeric
    }
}