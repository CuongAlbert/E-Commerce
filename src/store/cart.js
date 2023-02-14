import { createSlice } from "@reduxjs/toolkit";

const currentUserCart = localStorage.getItem("currentUserCart")
  ? JSON.parse(localStorage.getItem("currentUserCart"))
  : [];

console.log("InitialState:", currentUserCart);

const cartSlice = createSlice({
  name: "CART",
  initialState: currentUserCart,
  reducers: {
    // Hàm add sản phẩm vào cart
    addCart(state, action) {
      state.push(action.payload);
      localStorage.setItem("currentUserCart", JSON.stringify(state));
    },

    // Hàm update số lượng sản phẩm trong cart
    updateCart(state, action) {
      for (let i = 0; i < state.length; i++) {
        //kiem tra id san pham voi id cac san pham trong gio hang
        if (state[i].id === action.payload.id) {
          //tim san pham duoc update qua id, cap nhat quantity moi
          state[i].amount = action.payload.amount;
        }
      }
      localStorage.setItem("currentUserCart", JSON.stringify(state));
    },

    deleteCart(state, action) {
      //xoa san pham
      for (let i = 0; i < state.length; i++) {
        //kiem tra id san pham voi id cac san pham trong gio hang
        if (state[i].id === action.payload.id) {
          state.splice(i, 1); //xoa khoi mang
        }
      }

      localStorage.setItem("currentUserCart", JSON.stringify(state));
    },

    logoutCart(state) {
      //xoa cart
      state.splice(0, state.length); //xoa cart tu vi tri dau tien, xoa tat ca san pham, tra ve mang rong
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
