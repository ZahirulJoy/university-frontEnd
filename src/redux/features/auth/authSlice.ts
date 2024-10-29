import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  userId: string;
  role:string;
  iat : number;
  exp: number;
};

type TAuthSate = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthSate = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload}) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
