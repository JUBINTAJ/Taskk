import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './count/Countslice' 


function Red() {

    const dispatch=useDispatch()

    const incrementt=()=>{
        dispatch(increment())
    }  

    return (
    <div>
        <div style={{backgroundColor : 'red', width : 10, height :20}}  onClick={incrementt()} ></div>
    </div>
  )
}

export default Red