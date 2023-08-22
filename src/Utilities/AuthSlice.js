import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState:{
        isLoggedIn : false
    },
    reducers:{
        setLogin : (state)=>{
        state.isLoggedIn = true
        },
        setLogout: (state) =>{
            state.isLoggedIn = false
        }
    }
})

export const {setLogin,setLogout} = AuthSlice.actions
export default AuthSlice.reducer