import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  nickName: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      //console.log(action.payload.data);
      state._id = action.payload.data._id;
      state.nickName = action.payload.data.nickName;
      state.email = action.payload.data.email;
    },
    logoutRedux: (state, action) => {
      //console.log(action.payload.data);
      state._id = "";
      state.nickName = "";
      state.email = "";
    }
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;