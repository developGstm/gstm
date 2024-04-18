import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuario:null,
  email:null,
  password:null,
  activeLogin: false
}

const userSlice = createSlice({
  name:'auth',
  initialState, 
  reducers: {
    loginUser: (state, action) => {
      const { usuario,email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.activeLogin = true;
      state.usuario =usuario; 
    },
    logoutUser:(state, action) => {
      state.email = '';
      state.password = '';
      state.activeLogin = false;
      state.login = null
    }
  }
})

export const { loginUser,logoutUser } = userSlice.actions

export default userSlice.reducer;