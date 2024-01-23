import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    liked : false
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setLiked : (state , action) => {
             state.liked = !state.liked
        }
    }
})

export const {setLiked} = userSlice.actions

export const userReducer = userSlice.reducer;