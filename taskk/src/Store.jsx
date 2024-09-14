import { configureStore } from "@reduxjs/toolkit";
import countreducer from "./count/Countslice"

export default configureStore({
    reducer: {
        count:countreducer
    }
})