import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassWord: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setUsername, setPassWord } = userSlice.actions;
export default userSlice.reducer;
