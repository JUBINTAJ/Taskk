import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './count/Countslice' 


function Blue() {
  const dispatch=useDispatch()

  const incrementt=()=>{
      dispatch(increment())
  }
  return (
    <div>
                <div style={{backgroundColor : 'blue', width :"10", height :"10"}} onClick={incrementt()}></div>

    </div>
  )
}

export default Blue