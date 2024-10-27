import { createSlice } from "@reduxjs/toolkit";

type TAuthSate= {
    user : null | object ,
    token: null | string,
}

const initialState : TAuthSate = {
    user : null,
    token:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,{payload})=>{
            state.user = payload.user
            state.token = payload.token
        },
        logout:(state)=>{
            state.user = null 
            state.token = null
        }
    }
})

export const {setUser , logout}=authSlice.actions;
export default authSlice.reducer;