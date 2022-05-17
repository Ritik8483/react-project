import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incNumber,decNumber } from '../actions/action';
import './Student.css';


export const Student = () => {
  const myState=useSelector((state)=>state.changeNumber)

//  const [mystate,setMystate ]  = useState()


    const dispatch=useDispatch();
  return (
    <div>
      <div className='container '>
        <div className='card'>
           <h2 className='incdec'>Increment/Decrement</h2>
           <div className='data'>
             <button className='minus' onClick={()=>dispatch(decNumber(2))}>-</button>
             <input type="number" value={myState}/>
             <button className='plus' onClick={()=>dispatch(incNumber(5))}>+</button>
           </div>
           <button className='open_modal'>Open Modal</button>
        </div>
      </div>
        
    </div>
  )
}
