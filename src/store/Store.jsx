import {configureStore} from '@reduxjs/toolkit'
import  imageSlice  from '../imageSlice/ImageSlice'
export const store = configureStore({
    reducer : {
        images : imageSlice
    }
})