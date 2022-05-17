import React from 'react';
import './Student.css';
import { cartIncrement,cartDecrement } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';

export const Cart = () => {
    const cartState=useSelector((state)=>state.changeCartNumber);
    console.log("cartState",cartState);
    const dispatch = useDispatch();
  return (
    <div>
        <div className='container'>
            <div className='card'>
                <div className='atc'>
                    <button type='button' className='cart_button' 
                    onClick={()=> dispatch(cartIncrement())}>Add to Cart</button>
                    <input type="number" value={cartState}/>
                    <button className='cart_button'
                     onClick={()=>dispatch(cartDecrement(2))}>Remove to Cart</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
