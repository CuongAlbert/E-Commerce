import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "LOGIN",
  initialState: initialLoginState,
  reducers: {
    // Hàm login
    onLogin(state, action) {
      state.isLogin = true;
      localStorage.setItem("personalInfor", JSON.stringify(action.payload));
    },
    // Hàm logout
    onLogout(state) {
      state.isLogin = false;
      localStorage.removeItem("personalInfor");
      localStorage.removeItem("currentUserCart");
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
