import { createSlice } from "@reduxjs/toolkit";

export const Countslice=createSlice({
    name:'count',
    initialState:{
        value:0
    },reducers:{
        increment:(state)=>{
          return  state.value +=1
        }
    }
})

export const {increment}=Countslice.actions;
export  default Countslice.reducer