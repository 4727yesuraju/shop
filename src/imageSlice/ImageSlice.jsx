import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    image : "./images/shirt1.png"
}

export const imageSlice = createSlice({
    name:"image",
    initialState,
    reducers:{
        changeImage : (state,action)=>{
            state.image = `${action.payload}`;
        }
    }
})

export const {changeImage} = imageSlice.actions;
export default imageSlice.reducer;