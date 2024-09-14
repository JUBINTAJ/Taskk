import React from 'react'
import { increment } from './count/Countslice'
import { useDispatch, useSelector } from 'react-redux'

function Count() {
    const count=useSelector((state)=>state.count.value);
    const dispatch=useDispatch()

    const incrementt=()=>{
        dispatch(increment())
    }


  return (
    <div>
<h1>count {count}</h1>
<button onClick={incrementt()}>increment</button>   
 </div>
  )
}

export default Count